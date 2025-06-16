'use client';

import { useForm, Controller } from 'react-hook-form';
import { TextInput, Button, Box, Group, Stack, Select, Grid } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { Donor, db } from '../lib/db';
import { useEffect, useState } from 'react';
import { minTouchTarget } from '../lib/accessibility';

type DonorType = 'individual' | 'organization' | 'foundation' | 'corporation';

const donorTypes = [
  { value: 'individual', label: 'Individual' },
  { value: 'organization', label: 'Organization' },
  { value: 'foundation', label: 'Foundation' },
  { value: 'corporation', label: 'Corporation' },
] as const;

export interface DonorFormData extends Donor {
  donorType: DonorType;
}

export function DonorForm({ onSuccess }: { onSuccess?: (data: DonorFormData) => void }) {
  const [isClient, setIsClient] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    formState: { errors },
  } = useForm<DonorFormData>({
    defaultValues: {
      donorType: 'individual',
    },
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const onSubmit = async (data: DonorFormData) => {
    try {
      await db.donors.add(data);
      notifications.show({
        title: 'Success',
        message: 'Donor information saved successfully',
        color: 'green',
      });
      reset();
      onSuccess?.(data);
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: 'Failed to save donor information',
        color: 'red',
      });
    }
  };

  const donorType = watch('donorType');

  if (!isClient) {
    return null;
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      role="form"
      aria-label="Donor Information Form"
    >
      <Stack gap="md">
        <Controller
          name="donorType"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              label="Donor Type"
              data={donorTypes}
              required
              aria-required="true"
              error={errors.donorType?.message}
              styles={(theme) => ({
                input: {
                  minHeight: minTouchTarget.height,
                },
              })}
            />
          )}
        />

        <Grid gutter={{ base: 'sm', sm: 'lg' }}>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <TextInput
              {...register('firstName', { required: donorType === 'individual' })}
              label="First Name"
              placeholder="Enter first name"
              required={donorType === 'individual'}
              aria-required={donorType === 'individual'}
              error={errors.firstName?.message}
              styles={(theme) => ({
                input: {
                  minHeight: minTouchTarget.height,
                },
              })}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <TextInput
              {...register('lastName', { required: donorType === 'individual' })}
              label="Last Name"
              placeholder="Enter last name"
              required={donorType === 'individual'}
              aria-required={donorType === 'individual'}
              error={errors.lastName?.message}
              styles={(theme) => ({
                input: {
                  minHeight: minTouchTarget.height,
                },
              })}
            />
          </Grid.Col>
        </Grid>

        {donorType !== 'individual' && (
          <TextInput
            {...register('organizationName', {
              required: ['organization', 'foundation', 'corporation'].includes(donorType),
            })}
            label="Organization Name"
            placeholder="Enter organization name"
            required
            aria-required="true"
            error={errors.organizationName?.message}
            styles={(theme) => ({
              input: {
                minHeight: minTouchTarget.height,
              },
            })}
          />
        )}

        <TextInput
          {...register('email')}
          type="email"
          label="Email"
          placeholder="Enter email address"
          error={errors.email?.message}
          styles={(theme) => ({
            input: {
              minHeight: minTouchTarget.height,
            },
          })}
        />

        <TextInput
          {...register('phone')}
          label="Phone"
          placeholder="Enter phone number"
          error={errors.phone?.message}
          styles={(theme) => ({
            input: {
              minHeight: minTouchTarget.height,
            },
          })}
        />

        <Group justify="flex-end" mt="md">
          <Button
            type="submit"
            style={{
              minHeight: minTouchTarget.height,
            }}
          >
            Save Donor Information
          </Button>
        </Group>
      </Stack>
    </Box>
  );
}
