import { useEffect, useState } from 'react';
import PlayerCardList from '../components/PlayerCardList';
import { Player } from "../types/playerTypes";

function PlayersPage() {
  const [players, setPlayers] = useState<Player[]>([]);

  const mockedPlayers = [
    { id: 1, name: "Lucas Ramos", pot: 0, position: "MID", drafted_by: null, image: "/playerImages/lucas.jpeg" },
    { id: 2, name: "Thiago Silva", pot: 1, position: "DEF", drafted_by: null, image: "/playerImages/thiago.jpg" },
    { id: 3, name: "André Costa", pot: 2, position: "ATK", drafted_by: null, image: "/playerImages/andre.jpg" },
    { id: 4, name: "Rafael Dias", pot: 3, position: "GK", drafted_by: null, image: "/playerImages/rafael.jpeg" },
    { id: 5, name: "Vinícius Lima", pot: 4, position: "DEF", drafted_by: null, image: null },
    { id: 6, name: "Diego Rocha", pot: 5, position: "MID", drafted_by: null, image: null },
    { id: 7, name: "Bruno Alves", pot: 6, position: "ATK", drafted_by: null, image: null },
    { id: 8, name: "Felipe Moreira", pot: 7, position: "DEF", drafted_by: null, image: null },
    { id: 9, name: "Matheus Barros", pot: 8, position: "MID", drafted_by: null, image: null },
    { id: 10, name: "Henrique Torres", pot: 9, position: "ATK", drafted_by: null, image: null },
    { id: 11, name: "Caio Martins", pot: 0, position: "GK", drafted_by: null, image: null },
    { id: 12, name: "Rodrigo Souza", pot: 1, position: "DEF", drafted_by: null, image: null },
    { id: 13, name: "Eduardo Pinto", pot: 2, position: "MID", drafted_by: null, image: null },
    { id: 14, name: "Luan Batista", pot: 3, position: "ATK", drafted_by: null, image: null },
    { id: 15, name: "Igor Ferreira", pot: 4, position: "DEF", drafted_by: null, image: null },
    { id: 16, name: "Pedro Henrique", pot: 5, position: "MID", drafted_by: null, image: null },
    { id: 17, name: "Bruno Nunes", pot: 6, position: "ATK", drafted_by: null, image: null },
    { id: 18, name: "Danilo Cunha", pot: 7, position: "DEF", drafted_by: null, image: null },
    { id: 19, name: "Alex Teixeira", pot: 8, position: "MID", drafted_by: null, image: null },
    { id: 20, name: "Rony Almeida", pot: 9, position: "ATK", drafted_by: null, image: null },
    { id: 21, name: "Vitor Silva", pot: 0, position: "DEF", drafted_by: null, image: null },
    { id: 22, name: "Gustavo Vieira", pot: 1, position: "MID", drafted_by: null, image: null },
    { id: 23, name: "César Lopes", pot: 2, position: "ATK", drafted_by: null, image: null },
    { id: 24, name: "Renan Torres", pot: 3, position: "DEF", drafted_by: null, image: null },
    { id: 25, name: "Juliano Prado", pot: 4, position: "MID", drafted_by: null, image: null },
    { id: 26, name: "Samuel Reis", pot: 5, position: "ATK", drafted_by: null, image: null },
    { id: 27, name: "Arthur Barros", pot: 6, position: "DEF", drafted_by: null, image: null },
    { id: 28, name: "Leandro Farias", pot: 7, position: "MID", drafted_by: null, image: null },
    { id: 29, name: "Douglas Monteiro", pot: 8, position: "ATK", drafted_by: null, image: null },
    { id: 30, name: "Fábio Araújo", pot: 9, position: "GK", drafted_by: null, image: null },
    { id: 31, name: "Maurício Campos", pot: 0, position: "DEF", drafted_by: null, image: null },
    { id: 32, name: "Fernando Cruz", pot: 1, position: "MID", drafted_by: null, image: null },
    { id: 33, name: "Renato Paiva", pot: 2, position: "ATK", drafted_by: null, image: null },
    { id: 34, name: "Otávio Mendes", pot: 3, position: "GK", drafted_by: null, image: null },
    { id: 35, name: "Hugo Matos", pot: 4, position: "DEF", drafted_by: null, image: null },
    { id: 36, name: "Léo Cardoso", pot: 5, position: "MID", drafted_by: null, image: null },
    { id: 37, name: "Ricardo Lopes", pot: 6, position: "ATK", drafted_by: null, image: null },
    { id: 38, name: "Marcelo Neves", pot: 7, position: "DEF", drafted_by: null, image: null },
    { id: 39, name: "Ivan Godoy", pot: 8, position: "MID", drafted_by: null, image: null },
    { id: 40, name: "Paulo Viana", pot: 9, position: "ATK", drafted_by: null, image: null },
    { id: 41, name: "Wesley Moraes", pot: 0, position: "GK", drafted_by: null, image: null },
    { id: 42, name: "Jefferson Costa", pot: 1, position: "DEF", drafted_by: null, image: null },
    { id: 43, name: "Allan Ribeiro", pot: 2, position: "MID", drafted_by: null, image: null },
    { id: 44, name: "Sandro Luz", pot: 3, position: "ATK", drafted_by: null, image: null },
    { id: 45, name: "Rodrigo Pires", pot: 4, position: "DEF", drafted_by: null, image: null },
    { id: 46, name: "Edu Fagundes", pot: 5, position: "MID", drafted_by: null, image: null },
    { id: 47, name: "Gilson Braga", pot: 6, position: "ATK", drafted_by: null, image: null },
    { id: 48, name: "Carlos Antunes", pot: 7, position: "DEF", drafted_by: null, image: null },
    { id: 49, name: "Marcos Tavares", pot: 8, position: "MID", drafted_by: null, image: null },
    { id: 50, name: "Neto Soares", pot: 9, position: "ATK", drafted_by: null, image: null },
    { id: 51, name: "Tiago Martins", pot: 0, position: "DEF", drafted_by: null, image: null },
    { id: 52, name: "Heitor Rocha", pot: 1, position: "MID", drafted_by: null, image: null },
    { id: 53, name: "Erick Lima", pot: 2, position: "ATK", drafted_by: null, image: null },
    { id: 54, name: "Lucas Barbosa", pot: 3, position: "DEF", drafted_by: null, image: null },
    { id: 55, name: "Breno Duarte", pot: 4, position: "MID", drafted_by: null, image: null },
    { id: 56, name: "Cael Nascimento", pot: 5, position: "ATK", drafted_by: null, image: null },
    { id: 57, name: "Lourenço Gomes", pot: 6, position: "DEF", drafted_by: null, image: null },
    { id: 58, name: "Cauê Moreira", pot: 7, position: "MID", drafted_by: null, image: null },
    { id: 59, name: "Matias Silva", pot: 8, position: "ATK", drafted_by: null, image: null },
    { id: 60, name: "Otto Braga", pot: 9, position: "GK", drafted_by: null, image: null },
    { id: 61, name: "Rafael Soares", pot: 0, position: "DEF", drafted_by: null, image: null },
    { id: 62, name: "Nicolas Xavier", pot: 1, position: "MID", drafted_by: null, image: null },
    { id: 63, name: "Gael Bernardes", pot: 2, position: "ATK", drafted_by: null, image: null },
    { id: 64, name: "Noah Souza", pot: 3, position: "DEF", drafted_by: null, image: null },
    { id: 65, name: "Davi Martins", pot: 4, position: "MID", drafted_by: null, image: null },
    { id: 66, name: "Kevin Oliveira", pot: 5, position: "ATK", drafted_by: null, image: null },
    { id: 67, name: "Luiz Ricardo", pot: 6, position: "DEF", drafted_by: null, image: null },
    { id: 68, name: "Benjamin Farias", pot: 7, position: "MID", drafted_by: null, image: null },
    { id: 69, name: "Tomás Ribeiro", pot: 8, position: "ATK", drafted_by: null, image: null },
    { id: 70, name: "Yuri Araújo", pot: 9, position: "GK", drafted_by: null, image: null },
    { id: 71, name: "Ícaro Dantas", pot: 0, position: "DEF", drafted_by: null, image: null },
    { id: 72, name: "Nathan Teixeira", pot: 1, position: "MID", drafted_by: null, image: null },
    { id: 73, name: "Rael Moraes", pot: 2, position: "ATK", drafted_by: null, image: null },
    { id: 74, name: "Enzo Silveira", pot: 3, position: "DEF", drafted_by: null, image: null },
    { id: 75, name: "Rian Fonseca", pot: 4, position: "MID", drafted_by: null, image: null },
    { id: 76, name: "Thales Camargo", pot: 5, position: "ATK", drafted_by: null, image: null },
    { id: 77, name: "João Guilherme", pot: 6, position: "DEF", drafted_by: null, image: null },
    { id: 78, name: "Bryan Carvalho", pot: 7, position: "MID", drafted_by: null, image: null },
    { id: 79, name: "Kaique Diniz", pot: 8, position: "ATK", drafted_by: null, image: null },
    { id: 80, name: "André Vilela", pot: 9, position: "GK", drafted_by: null, image: null }
  ];

  useEffect(() => {
    setPlayers(mockedPlayers);
  }, []);

  return (
    <main>
      <h1>Jogadores</h1>
      <div>
        <button>Cadastrar Novo Jogador</button>
      </div>
      <section>
        <h2>Lista de Jogadores</h2>
        <PlayerCardList players={players} />
      </section>
    </main>
  );
}
export default PlayersPage;
