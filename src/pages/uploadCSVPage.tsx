import { useRef, useState } from 'react';
import { uploadCsv } from '../api/client';

function UploadCSV() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  function handleChooseFile() {
    fileInputRef.current?.click();
  }

  function handleChangeFile(e: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    setError(null);
    setSuccess(null);
  }

  async function handleUpload() {
    if (!file) {
      setError('Selecione um arquivo primeiro.');
      return;
    }

    try {
      setLoading(true);
      const response = await uploadCsv(file);
      setSuccess(`Upload concluído: ${JSON.stringify(response)}`);
      setError(null);
    } catch (err: any) {
      console.error(err);
      setError('Erro ao fazer upload.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Upload de CSV</h1>

      {/* input de arquivo invisível */}
      <input
        type="file"
        accept=".csv"
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleChangeFile}
      />

      <button onClick={handleChooseFile}>Escolher Arquivo</button>

      {file && <p>Arquivo selecionado: {file.name}</p>}

      <button onClick={handleUpload} disabled={loading || !file}>
        {loading ? 'Enviando...' : 'Fazer Upload'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </main>
  );
}

export default UploadCSV;
