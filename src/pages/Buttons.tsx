import { Alert, Divider, Tabs } from "@mantine/core";
import { Outlet, useNavigate, useParams } from "react-router-dom";

const Buttons = () => {
  const navigate = useNavigate();
  const { tabValue } = useParams();
  return (
    <div>
      <h3 style={{ marginLeft: 20 }}>Button Tabs</h3>
      <Alert>These tabs use react-router-dom</Alert>

      {/* info alert */}

      <Alert color="gray" title="chatGPT Tip*">
        What modifications I can make to this component, If I want to use it in
        my big project
      </Alert>

      <Divider my="sm" variant="dashed" />
      <div>
        <Tabs
          variant="pills"
          value={tabValue}
          defaultValue="secondary"
          radius="md"
          onTabChange={(value) => navigate(`${value}`)}
        >
          <Tabs.List>
            <Tabs.Tab value="primary">Primary</Tabs.Tab>
            <Tabs.Tab value="secondary">Secondary</Tabs.Tab>
            <Tabs.Tab value="success">Success</Tabs.Tab>
            <Tabs.Tab value="danger">Danger</Tabs.Tab>
            <Tabs.Tab value="warning">Warning</Tabs.Tab>
            <Tabs.Tab value="info">Info</Tabs.Tab>
            <Tabs.Tab value="light">Light</Tabs.Tab>
            <Tabs.Tab value="dark">Dark</Tabs.Tab>
            <Tabs.Tab value="link">Link</Tabs.Tab>
            <Tabs.Tab value="outline">Outline</Tabs.Tab>
            <Tabs.Tab value="text">Text</Tabs.Tab>
            <Tabs.Tab value="icon">Icon</Tabs.Tab>
            <Tabs.Tab value="fab">FAB</Tabs.Tab>
            <Tabs.Tab value="toggle">Toggle</Tabs.Tab>
            <Tabs.Tab value="loading">Loading</Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </div>
      <Divider my="sm" variant="dashed" />
      <Outlet />
    </div>
  );
};

export default Buttons;
