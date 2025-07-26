// src/components/PlayerCardList.tsx
import React from 'react';
import { Player } from '../../types/playerTypes';
import PlayerCard from '../PlayerCard';

type PlayerCardListProps = {
  players: Player[];
};

const PlayerCardList: React.FC<PlayerCardListProps> = ({ players }) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))',
      gap: '16px',
      marginTop: '20px'
    }}>
      {players.map(player => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </div>
  );
};

export default PlayerCardList;
