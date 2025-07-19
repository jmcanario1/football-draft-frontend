import { Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/mainLayout';
import DraftPage from '../pages/draftPage';
import PlayersPage from '../pages/playersPage';
import TeamsPage from '../pages/teamsPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/players" element={<PlayersPage />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/draft" element={<DraftPage />} />
      </Route>
    </Routes>

  );
}
