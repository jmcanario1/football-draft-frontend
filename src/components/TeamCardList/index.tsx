// src/components/PlayerCardList.tsx
import React from 'react';
import { Team } from '../../types/teamTypes';
import TeamCard from '../TeamCard';

type TeamCardListProps = {
  teams: Team[];
};

const TeamCardList: React.FC<TeamCardListProps> = ({ teams }) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))',
      gap: '16px',
      marginTop: '20px'
    }}>
      {teams.map(team => (
        <TeamCard key={team.id} team={team} />
      ))}
    </div>
  );
};

export default TeamCardList;
