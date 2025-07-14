export type Player = {
  id: number;
  name: string;
  pot: number;
  position: string;
};

export type TeamsResponse = {
  [teamName: string]: Player[];
};