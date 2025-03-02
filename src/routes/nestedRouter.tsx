import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';
import MantineUi from '../pages/MantineUi';
import MantineUiV6 from '../pages/MantineUiV6';
import MantineUiV7 from '../pages/MantineUiV7';

const NestedRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        <Route path="mantine" element={<MantineUi />}>
          <Route path="v6" element={<MantineUiV6 />} />
          <Route path="v7" element={<MantineUiV7 />} />
        </Route>
      </Route>
    </Routes>
  </Router>
);

export default NestedRouter;
