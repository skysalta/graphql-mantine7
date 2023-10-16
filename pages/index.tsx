import { Badge, Button, Card, Container, Grid, Group, Text } from '@mantine/core';
import classes from './index.module.css';

export default function HomePage() {
  return (
    <>
      <header className={classes.header}>
        <Grid justify="space-between">
          <Grid.Col span={2}>
            <Text size="lg" fw={500}>
              Graphql Workshop
            </Text>
          </Grid.Col>
          <Grid.Col span={2}>
            <Button variant="light" color="blue" fullWidth radius="md">
              Add Task
            </Button>
          </Grid.Col>
        </Grid>
      </header>
      <Container>
        <Grid>
          <Grid.Col span={3}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>Task title</Text>
                <Badge color="pink" variant="light">
                  Task type
                </Badge>
              </Group>
              <Text size="sm" c="dimmed">
                Task description
              </Text>
              <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                Edit Task
              </Button>
              <Button variant="light" color="red" fullWidth mt="md" radius="md">
                Delete Task
              </Button>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}
