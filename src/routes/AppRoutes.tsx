import { Route, Routes } from 'react-router-dom';
import DraftPage from '../pages/draftPage';
import TeamsPage from '../pages/teamsPage';
import UploadCSV from '../pages/uploadCSVPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/upload" element={<UploadCSV />} />
      <Route path="/teams" element={<TeamsPage />} />
      <Route path="/draft" element={<DraftPage />} />
    </Routes>
  );
}
