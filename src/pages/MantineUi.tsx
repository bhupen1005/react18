import { Menu, Button, Text } from "@mantine/core";
import { Link } from "react-router-dom";
const MantineUi = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <Menu shadow="" width={200} defaultOpened={true} opened={true}>
        <Menu.Target>
          <Button>Toggle menu</Button>
        </Menu.Target>

        <Menu.Dropdown
          style={{
            minWidth: 200,
            overflowY: "auto",
            maxHeight: 500,
            scrollbarWidth: "thin",
            scrollbarColor: "#ddd",
            msScrollbarBaseColor: "#ddd",
          }}
        >
          <Menu.Label>Mantine v6.0.21</Menu.Label>
          <Menu.Item>
            <Link to="https://v6.mantine.dev/core/app-shell/" target="_blank">
              Layout
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="https://v6.mantine.dev/core/action-icon/" target="_blank">
              Buttons
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              to="https://v6.mantine.dev/core/autocomplete/"
              target="_blank"
            >
              Inputs
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="https://v6.mantine.dev/core/anchor/" target="_blank">
              Navigation
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="https://v6.mantine.dev/core/accordion/" target="_blank">
              Data Display
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="https://v6.mantine.dev/core/affix/" target="_blank">
              Overlays
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="https://v6.mantine.dev/core/blockquote/" target="_blank">
              Typography
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="https://v6.mantine.dev/core/alert/" target="_blank">
              Feedback
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="https://v6.mantine.dev/core/box/" target="_blank">
              Miscellaneous
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              to="https://v6.mantine.dev/dates/dates-provider/"
              target="_blank"
            >
              Mantine Dates
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="https://v6.mantine.dev/others/carousel/" target="_blank">
              Other Packages
            </Link>
          </Menu.Item>
          <Menu.Item>Gallery</Menu.Item>
          <Menu.Item
            rightSection={
              <Text size="xs" color="dimmed">
                ⌘K
              </Text>
            }
          >
            Search
          </Menu.Item>

          <Menu.Divider />

          <Menu.Label>Danger zone</Menu.Label>
          <Menu.Item>Transfer my data</Menu.Item>
          <Menu.Item color="red">Delete my account</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};

export default MantineUi;
