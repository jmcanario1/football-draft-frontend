import React from 'react';
import { Player } from '../../types/playerTypes';

type PlayerCardProps = {
  player: Player;
};

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  const hasImage = Boolean(player.image && player.image.trim() !== '');
  
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '12px',
      marginBottom: '10px',
      maxWidth: '300px',
      boxShadow: '2px 2px 6px rgba(0,0,0,0.1)',
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }}>
<div style={{
  width: 60,
  height: 60,
  backgroundColor: '#eee',
  borderRadius: '50%',
  overflow: 'hidden',
  ...(hasImage ? {} : {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    color: '#555'
  })
}}>
  {hasImage ? (
    <img
      src={player.image!}
      alt={`Foto de perfil de ${player.name}`}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      }}
    />
  ) : (
    <span aria-label={`Inicial do nome: ${player.name.charAt(0)}`}>
      {player.name.charAt(0)}
    </span>
  )}
</div>

      <div>
        <h3 style={{ margin: 0 }}>{player.name}</h3>
        <p style={{ margin: '4px 0' }}>
          <strong>Posição:</strong> {player.position} <br />
          <strong>Pote:</strong> {player.pot} <br />
          <strong>Drafted by:</strong> {player.drafted_by ?? 'Não draftado'}
        </p>
      </div>
    </div>
  );
};

export default PlayerCard;
