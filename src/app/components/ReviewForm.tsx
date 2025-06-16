'use client';

import { Paper, Title, Text, Stack, Group, Button, List } from '@mantine/core';
import { formatDate } from '../lib/utils';

type ReviewFormProps = {
  data: {
    donor?: {
      name: string;
      email: string;
      phone?: string;
      address?: string;
    };
    gift?: {
      giftType: string;
      amount: number;
      date: Date;
      fundNumber: string;
      purpose: string;
      notes?: string;
    };
  };
  onSubmit: () => void;
};

export function ReviewForm({ data, onSubmit }: ReviewFormProps) {
  const { donor, gift } = data;

  const handleSubmit = () => {
    // Here we would typically send the data to a server
    // For now, we'll just call onSubmit
    onSubmit();
  };

  return (
    <Stack>
      <Paper withBorder p="md">
        <Stack>
          <Title order={2}>Donor Information</Title>
          <List>
            <List.Item>
              <Text fw={500}>Name:</Text> {donor?.name}
            </List.Item>
            <List.Item>
              <Text fw={500}>Email:</Text> {donor?.email}
            </List.Item>
            {donor?.phone && (
              <List.Item>
                <Text fw={500}>Phone:</Text> {donor.phone}
              </List.Item>
            )}
            {donor?.address && (
              <List.Item>
                <Text fw={500}>Address:</Text> {donor.address}
              </List.Item>
            )}
          </List>
        </Stack>
      </Paper>

      <Paper withBorder p="md">
        <Stack>
          <Title order={2}>Gift Details</Title>
          <List>
            <List.Item>
              <Text fw={500}>Gift Type:</Text> {gift?.giftType}
            </List.Item>
            <List.Item>
              <Text fw={500}>Amount:</Text> ${gift?.amount?.toFixed(2)}
            </List.Item>
            <List.Item>
              <Text fw={500}>Date:</Text> {gift?.date ? formatDate(gift.date) : ''}
            </List.Item>
            <List.Item>
              <Text fw={500}>Fund Number:</Text> {gift?.fundNumber}
            </List.Item>
            <List.Item>
              <Text fw={500}>Purpose:</Text> {gift?.purpose}
            </List.Item>
            {gift?.notes && (
              <List.Item>
                <Text fw={500}>Notes:</Text> {gift.notes}
              </List.Item>
            )}
          </List>
        </Stack>
      </Paper>

      <Group justify="flex-end">
        <Button onClick={handleSubmit}>Submit Transmittal</Button>
      </Group>
    </Stack>
  );
}
