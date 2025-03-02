import { Button } from "@mantine/core";
import { Link, Outlet } from "react-router-dom";

const UiElements = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="layout">
              <Button mt={4} mb={4} variant="outline">
                Layout
              </Button>
            </Link>
          </li>
          <li>
            <Link to="buttons">
              <Button mt={4} mb={4} variant="outline">
                Buttons
              </Button>
            </Link>
          </li>
          <li>
            <Link to="navigation">
              <Button mt={4} mb={4} variant="outline">
                Navigation
              </Button>
            </Link>
          </li>
          <li>
            <Link to="dataDisplay">
              <Button mt={4} mb={4} variant="outline">
                Data Display
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default UiElements;
