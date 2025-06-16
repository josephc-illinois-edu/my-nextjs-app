'use client';

import { useForm } from 'react-hook-form';
import { TextInput, Button, Box, Group } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { Donor, db } from '../lib/db';
import { useEffect, useState } from 'react';

export function DonorForm({ onSuccess }: { onSuccess?: () => void }) {
  const [isClient, setIsClient] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Donor>();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const onSubmit = async (data: Donor): Promise<void> => {
    try {
      const now = new Date();
      await db.donors.add({
        ...data,
        createdAt: now,
        updatedAt: now,
      });
      notifications.show({
        title: 'Success',
        message: 'Donor added successfully',
        color: 'green',
      });
      reset();
      onSuccess?.();
    } catch (error: unknown) {
      console.error('Failed to add donor:', error);
      notifications.show({
        title: 'Error',
        message: 'Failed to add donor',
        color: 'red',
      });
    }
  };

  if (!isClient) {
    return null; // Return null on server-side
  }

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        label="Name"
        placeholder="Enter donor name"
        required
        {...register('name', { required: 'Name is required' })}
        error={errors.name?.message}
        mb="md"
      />
      <TextInput
        label="Email"
        placeholder="Enter email"
        required
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address',
          },
        })}
        error={errors.email?.message}
        mb="md"
      />
      <TextInput label="Phone" placeholder="Enter phone number" {...register('phone')} mb="md" />
      <TextInput label="Address" placeholder="Enter address" {...register('address')} mb="md" />
      <Group justify="flex-end">
        <Button type="submit">Add Donor</Button>
      </Group>
    </Box>
  );
}
