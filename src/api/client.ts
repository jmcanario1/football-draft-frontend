import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000',
});

export const uploadCsv = async (file: File): Promise<any> => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await api.post('/api/upload-csv', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const getGrid = async (): Promise<any> => {
  const response = await api.get('/api/grid');
  return response.data;
};

export const draftPlayer = async (playerId: number, teamName: string): Promise<any> => {
  const response = await api.post('/api/draft', {
    player_id: playerId,
    team_name: teamName
  });
  return response.data;
};

export const getTeams = async (): Promise<any> => {
  const response = await api.get('/api/teams');
  return response.data;
}