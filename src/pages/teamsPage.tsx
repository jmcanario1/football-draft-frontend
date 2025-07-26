import { useEffect } from 'react';

function TeamsPage() {

  useEffect(() => {
  
  }, []);

  const mockedTeams = [
    {
      id: 1,
      teamName: "Falcões Dourados",
      teamImage: "Imagem Falcões Dourados",
      players: [
        { playerId: 1, playerName: "Lucas Ramos" },
        { playerId: 2, playerName: "Thiago Silva" },
        { playerId: 3, playerName: "André Costa" },
        { playerId: 4, playerName: "Rafael Dias" },
        { playerId: 5, playerName: "Vinícius Lima" },
        { playerId: 6, playerName: "Diego Rocha" },
        { playerId: 7, playerName: "Bruno Alves" },
        { playerId: 8, playerName: "Felipe Moreira" },
        { playerId: 9, playerName: "Matheus Barros" },
        { playerId: 10, playerName: "Henrique Torres" }
      ]
    },
    {
      id: 2,
      teamName: "Leões do Norte",
      teamImage: "Imagem Leões do Norte",
      players: [
        { playerId: 11, playerName: "Caio Martins" },
        { playerId: 12, playerName: "Rodrigo Souza" },
        { playerId: 13, playerName: "Eduardo Pinto" },
        { playerId: 14, playerName: "Luan Batista" },
        { playerId: 15, playerName: "Igor Ferreira" },
        { playerId: 16, playerName: "Pedro Henrique" },
        { playerId: 17, playerName: "Bruno Nunes" },
        { playerId: 18, playerName: "Danilo Cunha" },
        { playerId: 19, playerName: "Alex Teixeira" },
        { playerId: 20, playerName: "Rony Almeida" }
      ]
    },
    {
      id: 3,
      teamName: "Águias Negras",
      teamImage: "Imagem Águias Negras",
      players: [
        { playerId: 21, playerName: "Vitor Silva" },
        { playerId: 22, playerName: "Gustavo Vieira" },
        { playerId: 23, playerName: "César Lopes" },
        { playerId: 24, playerName: "Renan Torres" },
        { playerId: 25, playerName: "Juliano Prado" },
        { playerId: 26, playerName: "Samuel Reis" },
        { playerId: 27, playerName: "Arthur Barros" },
        { playerId: 28, playerName: "Leandro Farias" },
        { playerId: 29, playerName: "Douglas Monteiro" },
        { playerId: 30, playerName: "Fábio Araújo" }
      ]
    },
    {
      id: 4,
      teamName: "Trovões Azuis",
      teamImage: "Imagem Trovões Azuis",
      players: [
        { playerId: 31, playerName: "Maurício Campos" },
        { playerId: 32, playerName: "Fernando Cruz" },
        { playerId: 33, playerName: "Renato Paiva" },
        { playerId: 34, playerName: "Otávio Mendes" },
        { playerId: 35, playerName: "Hugo Matos" },
        { playerId: 36, playerName: "Léo Cardoso" },
        { playerId: 37, playerName: "Ricardo Lopes" },
        { playerId: 38, playerName: "Marcelo Neves" },
        { playerId: 39, playerName: "Ivan Godoy" },
        { playerId: 40, playerName: "Paulo Viana" }
      ]
    },
    {
      id: 5,
      teamName: "Panteras Vermelhas",
      teamImage: "Imagem Panteras Vermelhas",
      players: [
        { playerId: 41, playerName: "Wesley Moraes" },
        { playerId: 42, playerName: "Jefferson Costa" },
        { playerId: 43, playerName: "Allan Ribeiro" },
        { playerId: 44, playerName: "Sandro Luz" },
        { playerId: 45, playerName: "Rodrigo Pires" },
        { playerId: 46, playerName: "Edu Fagundes" },
        { playerId: 47, playerName: "Gilson Braga" },
        { playerId: 48, playerName: "Carlos Antunes" },
        { playerId: 49, playerName: "Marcos Tavares" },
        { playerId: 50, playerName: "Neto Soares" }
      ]
    },
    {
      id: 6,
      teamName: "Titãs do Sul",
      teamImage: "Imagem Titãs do Sul",
      players: [
        { playerId: 51, playerName: "Tiago Martins" },
        { playerId: 52, playerName: "Heitor Rocha" },
        { playerId: 53, playerName: "Erick Lima" },
        { playerId: 54, playerName: "Lucas Barbosa" },
        { playerId: 55, playerName: "Breno Duarte" },
        { playerId: 56, playerName: "Cael Nascimento" },
        { playerId: 57, playerName: "Lourenço Gomes" },
        { playerId: 58, playerName: "Cauê Moreira" },
        { playerId: 59, playerName: "Matias Silva" },
        { playerId: 60, playerName: "Otto Braga" }
      ]
    },
    {
      id: 7,
      teamName: "Cavaleiros de Aço",
      teamImage: "Imagem Cavaleiros de Aço",
      players: [
        { playerId: 61, playerName: "Rafael Soares" },
        { playerId: 62, playerName: "Nicolas Xavier" },
        { playerId: 63, playerName: "Gael Bernardes" },
        { playerId: 64, playerName: "Noah Souza" },
        { playerId: 65, playerName: "Davi Martins" },
        { playerId: 66, playerName: "Kevin Oliveira" },
        { playerId: 67, playerName: "Luiz Ricardo" },
        { playerId: 68, playerName: "Benjamin Farias" },
        { playerId: 69, playerName: "Tomás Ribeiro" },
        { playerId: 70, playerName: "Yuri Araújo" }
      ]
    },
    {
      id: 8,
      teamName: "Lobos da Serra",
      teamImage: "Imagem Lobos da Serra",
      players: [
        { playerId: 71, playerName: "Ícaro Dantas" },
        { playerId: 72, playerName: "Nathan Teixeira" },
        { playerId: 73, playerName: "Rael Moraes" },
        { playerId: 74, playerName: "Enzo Silveira" },
        { playerId: 75, playerName: "Rian Fonseca" },
        { playerId: 76, playerName: "Thales Camargo" },
        { playerId: 77, playerName: "João Guilherme" },
        { playerId: 78, playerName: "Bryan Carvalho" },
        { playerId: 79, playerName: "Kaique Diniz" },
        { playerId: 80, playerName: "André Vilela" }
      ]
    }
  ];


  return (
    <main>
      <h1>Times</h1>
      <button>Cadastrar Novo Time</button>
      <button>Visualizar Times</button>
      <button>Editar Time</button>
      <button>Excluir Time</button>

      <div className='teams-conteiner' style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px'}}>
        {mockedTeams.map(team => (
          <div key={team.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
            <h2>{team.teamName}</h2>
            <h3>Jogadores:</h3>
            <ul>
              {team.players.map(player => (
                <li key={player.playerId}>{player.playerName}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
export default TeamsPage;
