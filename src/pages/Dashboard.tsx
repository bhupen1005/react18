import { Button, Title } from "@mantine/core";
import { Outlet, Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Title mt={4} mb={4} order={3}>
        Dashboard
      </Title>
      <nav>
        <Link to="profile">
          <Button ml={4} mr={4} variant="outline">
            Profile
          </Button>
        </Link>
        <Link to="settings">
          <Button ml={4} mr={4} variant="outline">
            Settings
          </Button>
        </Link>{" "}
        <Link to="mantine">
          <Button ml={4} mr={4} variant="outline">
            Mantine
          </Button>
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Dashboard;
