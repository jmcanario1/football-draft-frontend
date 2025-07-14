import { useEffect, useState } from 'react';
import { getTeams } from '../api/client';
import { TeamsResponse } from './types';

function TeamsPage() {
  const [teams, setTeams] = useState<TeamsResponse>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTeams() {
      try {
        const data = await getTeams();
        console.log(data);
        setTeams(data);
      } catch (err) {
        setError('Erro ao carregar os times.');
      } finally {
        setLoading(false);
      }
    }

    fetchTeams();
  }, []);

  if (loading) return <p>Carregando times...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main>
      <h1>Times e Jogadores</h1>
      {Object.entries(teams).map(([teamName, players]) => (
        <section key={teamName}>
          <h2>{teamName}</h2>
          <ul>
            {players.map((player) => (
              <li key={player.id}>
                {player.name} - {player.pot === 0 ? 'Goleiro' : `Pote ${player.pot}`}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
export default TeamsPage;
