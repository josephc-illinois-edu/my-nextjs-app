'use client';

import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Stack,
  Paper,
  ThemeIcon,
  Grid,
} from '@mantine/core';
import { IconGift, IconHistory, IconSearch, IconFileExport } from '@tabler/icons-react';
import Link from 'next/link';

const features = [
  {
    icon: <IconGift size={24} />,
    title: 'Process New Gifts',
    description: 'Quickly process and record new donations with our streamlined transmittal form',
  },
  {
    icon: <IconHistory size={24} />,
    title: 'Track History',
    description: 'Access complete history of transmitted gifts and their current status',
  },
  {
    icon: <IconSearch size={24} />,
    title: 'Search & Filter',
    description: 'Easily find specific transmittals using advanced search and filtering options',
  },
  {
    icon: <IconFileExport size={24} />,
    title: 'Export Reports',
    description: 'Generate and download detailed reports in multiple formats',
  },
];

export default function Home() {
  return (
    <Container size="xl" py="xl">
      <Stack gap="xl">
        {/* Hero Section */}
        <Stack ta="center" gap="md">
          <Title order={1} size="h1">
            Welcome to the Gift Transmittal System
          </Title>
          <Text size="lg" c="dimmed" maw={600} mx="auto">
            Streamline your gift processing workflow with our modern and efficient transmittal
            system.
          </Text>
          <Group justify="center" mt="md">
            <Button
              component={Link}
              href="/new-transmittal"
              size="lg"
              variant="filled"
              leftSection={<IconGift size={20} />}
            >
              New Transmittal
            </Button>
            <Button
              component={Link}
              href="/search"
              size="lg"
              variant="light"
              leftSection={<IconSearch size={20} />}
            >
              Search Transmittals
            </Button>
          </Group>
        </Stack>

        {/* Features Section */}
        <Paper withBorder p="xl" radius="md">
          <Grid>
            {features.map((feature, index) => (
              <Grid.Col key={index} span={{ base: 12, sm: 6 }}>
                <Group>
                  <ThemeIcon size="xl" radius="md" variant="light">
                    {feature.icon}
                  </ThemeIcon>
                  <Stack gap="xs">
                    <Text fw={500} size="lg">
                      {feature.title}
                    </Text>
                    <Text c="dimmed" size="sm">
                      {feature.description}
                    </Text>
                  </Stack>
                </Group>
              </Grid.Col>
            ))}
          </Grid>
        </Paper>
      </Stack>
    </Container>
  );
}
