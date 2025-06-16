'use client';

import { useForm, Controller } from 'react-hook-form';
import {
  TextInput,
  Button,
  Box,
  Group,
  NumberInput,
  Select,
  Stack,
  Textarea,
  rem,
} from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { notifications } from '@mantine/notifications';
import { minTouchTarget } from '../lib/accessibility';

type GiftType = 'cash' | 'check' | 'creditCard' | 'securities' | 'other';

interface GiftDetails {
  giftType: GiftType;
  amount: number;
  date: Date;
  fundNumber: string;
  purpose: string;
  notes: string;
}

const giftTypes = [
  { value: 'cash', label: 'Cash' },
  { value: 'check', label: 'Check' },
  { value: 'creditCard', label: 'Credit Card' },
  { value: 'securities', label: 'Securities' },
  { value: 'other', label: 'Other' },
] as const;

export function GiftDetailsForm({ onSuccess }: { onSuccess?: (data: GiftDetails) => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<GiftDetails>();

  const onSubmit = async (data: GiftDetails) => {
    try {
      onSuccess?.(data);
      notifications.show({
        title: 'Success',
        message: 'Gift details saved successfully',
        color: 'green',
      });
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: 'Failed to save gift details',
        color: 'red',
      });
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      role="form"
      aria-label="Gift Details Form"
    >
      <Stack gap="md">
        <Controller
          name="giftType"
          control={control}
          rules={{ required: 'Gift type is required' }}
          render={({ field }) => (
            <Select
              label="Gift Type"
              placeholder="Select gift type"
              data={giftTypes}
              error={errors.giftType?.message}
              required
              value={field.value}
              onChange={(value) => field.onChange(value as GiftType)}
              styles={(theme) => ({
                input: {
                  minHeight: minTouchTarget.height,
                },
              })}
            />
          )}
        />

        <Controller
          name="amount"
          control={control}
          rules={{ required: 'Amount is required', min: 0 }}
          render={({ field }) => (
            <NumberInput
              label="Amount"
              placeholder="Enter amount"
              min={0}
              error={errors.amount?.message}
              required
              value={field.value}
              onChange={(value) => field.onChange(value)}
              styles={(theme) => ({
                input: {
                  minHeight: minTouchTarget.height,
                },
              })}
            />
          )}
        />

        <Controller
          name="date"
          control={control}
          rules={{ required: 'Date is required' }}
          render={({ field }) => (
            <DateInput
              label="Date"
              placeholder="Select date"
              error={errors.date?.message}
              required
              value={field.value}
              onChange={(value) => field.onChange(value)}
              clearable={false}
              styles={(theme) => ({
                input: {
                  minHeight: minTouchTarget.height,
                },
              })}
            />
          )}
        />

        <TextInput
          {...register('fundNumber', { required: 'Fund number is required' })}
          label="Fund Number"
          placeholder="Enter fund number"
          error={errors.fundNumber?.message}
          required
          styles={(theme) => ({
            input: {
              minHeight: minTouchTarget.height,
            },
          })}
        />

        <Controller
          name="purpose"
          control={control}
          rules={{ required: 'Purpose is required' }}
          render={({ field }) => (
            <Textarea
              label="Purpose"
              placeholder="Enter gift purpose"
              error={errors.purpose?.message}
              required
              {...field}
              styles={(theme) => ({
                input: {
                  minHeight: rem(80),
                },
              })}
            />
          )}
        />

        <Textarea
          {...register('notes')}
          label="Notes"
          placeholder="Enter any additional notes"
          error={errors.notes?.message}
          styles={(theme) => ({
            input: {
              minHeight: rem(80),
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
            Save Gift Details
          </Button>
        </Group>
      </Stack>
    </Box>
  );
}
