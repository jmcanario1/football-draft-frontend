import { useEffect } from 'react';

function PlayersPage() {

  useEffect(() => {}, []);

  return (
    <main>
      <h1>Jogadores</h1>
      <button>Cadastrar Novo Jogador</button>
      <button>Visualizar Jogadores</button>
      <button>Editar Jogador</button>
      <button>Excluir Jogador</button>
    </main>
  );
}
export default PlayersPage;
