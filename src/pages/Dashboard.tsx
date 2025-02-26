import { Outlet, Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to="profile">Profile</Link> | <Link to="settings">Settings</Link>{" "}
        | <Link to="mantine">Mantine</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Dashboard;
