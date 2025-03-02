import {} from "../components/MantineV6Components";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

const MantineUiV6 = () => {
  return (
    <div>
      <h1>Mantine UI v6</h1>
      <Button>Click Me</Button>
      <Button
        ml={10}
        variant="gradient"
        gradient={{ from: "orange", to: "red" }}
      >
        Orange red
      </Button>
      <Card mt={10} shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image
            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            height={160}
            alt="Norway"
          />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>Norway Fjord Adventures</Text>
          <Badge color="pink" variant="light">
            On Sale
          </Badge>
        </Group>

        <Text size="sm" color="dimmed">
          With Fjord Tours you can explore more of the magical fjord landscapes
          with tours and activities on and around the fjords of Norway
        </Text>

        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
          Book classic tour now
        </Button>
      </Card>
      <p>
        Mantine is a MIT-licensed open-source project with its ongoing
        development made possible entirely by the support of these awesome
        backers. If you'd like to join them, please consider:
      </p>
      <ul>
        <li>Become a sponsor or backer on OpenCollective.</li>
        <li>One-time donation via PayPal.</li>
        <li>Monthly donation via GitHub Sponsors.</li>
      </ul>
      <p>Your support means a lot to us, thank you!</p>
    </div>
  );
};

export default MantineUiV6;
