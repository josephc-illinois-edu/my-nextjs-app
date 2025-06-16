'use client';

import { Container, Title, Text, Box } from '@mantine/core';
import { TransmittalStepper } from '../components/TransmittalStepper';

export default function NewTransmittalPage() {
  return (
    <Box py={{ base: 'md', sm: 'xl' }}>
      <Container size="lg">
        <header>
          <Title order={1} mb="xs" size="h1">
            New Gift Transmittal
          </Title>
          <Text c="dimmed" mb="xl" size="md">
            Please complete the following steps to submit a new gift transmittal.
          </Text>
        </header>

        <Box component="section" role="region" aria-label="Gift Transmittal Form">
          <TransmittalStepper />
        </Box>
      </Container>
    </Box>
  );
}
