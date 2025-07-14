import { useState } from 'react';

function UploadCSV() {
  // Estado do componente
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function handleChooseFile() {

  }

  function handleUpload() {
    
  }

  function handleChangeFile() {

  }

  // Renderização JSX
  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro.{}</p>;

  return (
    <main>
      <h1>Upload File</h1>

      
      <button onClick={handleChooseFile}>Escolher Arquivo</button>
    </main>
  );
}

export default UploadCSV;
