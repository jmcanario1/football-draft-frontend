import React, { useEffect, useState } from 'react';
import { draftPlayer, getGrid, getTeams } from '../api/client';

type Player = {
  id: number;
  name: string;
  position: string;
};

type GridData = {
  [pot: number]: Player[];
};

type TeamsData = {
  [teamName: string]: {
    id: number;
    name: string;
    pot: number;
    position: string;
  }[];
};

function DraftPage() {
  const [gridData, setGridData] = useState<GridData>({});
  const [teams, setTeams] = useState<TeamsData>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const teamNames = ['Time A', 'Time B', 'Time C', 'Time D', 'Time E', 'Time F', 'Time G', 'Time H',];

  useEffect(() => {
    async function fetchData() {
      try {
        const [grid, drafted] = await Promise.all([getGrid(), getTeams()]);
        setGridData(grid);
        setTeams(drafted);
        setLoading(false);
      } catch (err) {
        setError('Erro ao carregar dados.');
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleDraft = async (team: string, pot: number, playerId: number) => {
    try {
      await draftPlayer(playerId, team);
      const [grid, drafted] = await Promise.all([getGrid(), getTeams()]);
      setGridData(grid);
      setTeams(drafted);
    } catch (err) {
      alert('Erro ao draftar jogador.');
    }
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main>
      <h1>Página de Draft</h1>

      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${teamNames.length + 1}, 1fr)`, gap: '10px', alignItems: 'start' }}>

        <div></div>
        {teamNames.map((team) => (
          <div key={`header-${team}`} style={{ fontWeight: 'bold', textAlign: 'center' }}>
            {team}
          </div>
        ))}

        {[...Array(8).keys()].map((pot) => (
          <React.Fragment key={`row-${pot}`}>
            <div style={{ fontWeight: 'bold' }}>Pote {pot}</div>
            {teamNames.map((team) => {
              const draftedPlayer = teams[team]?.find((p) => p.pot === pot);
              const availablePlayers = gridData[pot]?.filter(
                (p) =>
                  !Object.values(teams)
                    .flat()
                    .some((dp) => dp.id === p.id)
              );
              return (
                <div
                  key={`${team}-${pot}`}
                  style={{
                    border: '1px solid gray',
                    padding: '10px',
                    borderRadius: '8px',
                    backgroundColor: '#f9f9f9',
                  }}
                >
                  {draftedPlayer ? (
                    <div>
                      <p>{draftedPlayer.name}</p>
                      <p>{draftedPlayer.position}</p>
                    </div>
                  ) : (
                    <select
                      onChange={(e) => {
                        const value = e.target.value;
                        if (value) {
                          const playerId = parseInt(value, 10);
                          handleDraft(team, pot, playerId);
                        }
                      }}
                      defaultValue=""
                    >
                      <option value="">Selecione um jogador</option>
                      {availablePlayers.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name} ({p.position})
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </main>
  );
}

export default DraftPage;
