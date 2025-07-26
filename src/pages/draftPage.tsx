import { useMemo, useState } from "react";

const teams = [
  "Falcões Dourados",
  "Leões do Norte",
  "Águias Negras",
  "Trovões Azuis",
  "Panteras Vermelhas",
  "Titãs do Sul",
  "Cavaleiros de Aço",
  "Lobos da Serra"
];

const players = [...Array(80)].map((_, i) => ({
  id: i + 1,
  name: `Jogador ${i + 1}`
}));

function DraftPage() {
  const [draftGrid, setDraftGrid] = useState(
    Array(8).fill(null).map(() => Array(8).fill(null))
  );

  const selectedPlayerIds = useMemo(
    () =>
      draftGrid.flat().filter(Boolean), // lista de IDs já selecionados
    [draftGrid]
  );

  const availablePlayers = useMemo(
    () =>
      players.filter((p) => !selectedPlayerIds.includes(p.id)),
    [selectedPlayerIds]
  );

  const handleSelect = (rowIdx, colIdx, value) => {
    const newGrid = draftGrid.map((row, r) =>
      row.map((cell, c) => (r === rowIdx && c === colIdx ? parseInt(value) : cell))
    );
    setDraftGrid(newGrid);
  };

  return (
    <main style={{ padding: 20 }}>
      <h1>Página de Draft</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(9, 1fr)", gap: "8px", marginTop: 20 }}>
        <div></div>
        {teams.map((team) => (
          <div key={team} style={{ fontWeight: "bold", textAlign: "center" }}>
            {team}
          </div>
        ))}
        {draftGrid.map((row, rowIdx) => (
          <>
            <div style={{ textAlign: "right", paddingRight: 8 }}>Rodada {rowIdx + 1}</div>
            {row.map((playerId, colIdx) => (
              <select
                key={`${rowIdx}-${colIdx}`}
                value={playerId ?? ""}
                onChange={(e) => handleSelect(rowIdx, colIdx, e.target.value)}
                style={{
                  padding: "4px",
                  width: "100%",
                  borderRadius: "4px"
                }}
              >
                <option value="">Selecionar</option>
                {playerId && (
                  <option value={playerId}>
                    {players.find((p) => p.id === playerId)?.name}
                  </option>
                )}
                {availablePlayers.map((player) => (
                  <option key={player.id} value={player.id}>
                    {player.name}
                  </option>
                ))}
              </select>
            ))}
          </>
        ))}
      </div>
    </main>
  );
}

export default DraftPage;
