import { Route, Routes } from 'react-router-dom';
import TeamsPage from '../pages/teamsPage';
import UploadCSV from '../pages/uploadCSVPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/upload" element={<UploadCSV />} />
      <Route path="/teams" element={<TeamsPage />} />
    </Routes>
  );
}
