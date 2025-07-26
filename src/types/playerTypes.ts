export type Player = {
  id: number;
  name: string;
  pot: number;
  position: string;
  drafted_by?: string | null;
  image?: string | null;
};
