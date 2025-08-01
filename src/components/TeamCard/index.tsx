import React from 'react';
import { Team } from '../../types/teamTypes';

type TeamCardProps = {
  team: Team;
};

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
  const hasImage = Boolean(team.image && team.image.trim() !== '');
  
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
      src={team.image!}
      alt={`Foto de perfil de ${team.name}`}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover', 
        display: 'block'
      }}
    />
  ) : (
    <span aria-label={`Inicial do nome: ${team.name.charAt(0)}`}>
      {team.name.charAt(0)}
    </span>
  )}
</div>

      <div>
        <h3 style={{ margin: 0 }}>{team.name}</h3>
        <p style={{ margin: '4px 0' }}>
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
