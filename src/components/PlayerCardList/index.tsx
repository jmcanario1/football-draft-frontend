import React from 'react';
import { Player } from '../../types/playerTypes';
import PlayerCard from '../PlayerCard';
import { Container } from './styles';

type PlayerCardListProps = {
  players: Player[];
};

const PlayerCardList: React.FC<PlayerCardListProps> = ({ players }) => {
  return (
    <Container>
      {players.map(player => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </Container>
  );
};

export default PlayerCardList;
