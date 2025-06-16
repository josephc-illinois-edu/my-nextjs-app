'use client';

import { Stepper, Group, Button, Stack, Box, Title, useMantineTheme, rem } from '@mantine/core';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { DonorForm } from './DonorForm';
import { GiftDetailsForm } from './GiftDetailsForm';
import { ReviewForm } from './ReviewForm';
import { minTouchTarget } from '../lib/accessibility';

interface FormData {
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
}

export function TransmittalStepper() {
  const [active, setActive] = useState(0);
  const [formData, setFormData] = useState<FormData>({});
  const theme = useMantineTheme();

  const nextStep = (stepData: Record<string, unknown>) => {
    setFormData((prev) => ({ ...prev, ...stepData }));
    setActive((current) => Math.min(current + 1, 3));
  };

  const prevStep = () => setActive((current) => Math.max(current - 1, 0));

  const steps = [
    {
      label: 'Donor Information',
      description: 'Enter donor details',
      title: 'Donor Information',
      content: <DonorForm onSuccess={(data) => nextStep({ donor: data })} />,
    },
    {
      label: 'Gift Details',
      description: 'Enter gift information',
      title: 'Gift Details',
      content: <GiftDetailsForm onSuccess={(data) => nextStep({ gift: data })} />,
    },
    {
      label: 'Review and Submit',
      description: 'Review and submit transmittal',
      title: 'Review and Submit',
      content: <ReviewForm data={formData} onSubmit={() => nextStep({})} />,
    },
  ];

  return (
    <Stack gap="xl">
      <Stepper
        active={active}
        styles={(theme) => ({
          step: {
            minHeight: rem(minTouchTarget.height),
          },
          stepBody: {
            margin: theme.spacing.xs,
          },
          separator: {
            marginLeft: theme.spacing.xs,
            marginRight: theme.spacing.xs,
          },
        })}
      >
        {steps.map((step, index) => (
          <Stepper.Step
            key={index}
            label={step.label}
            description={step.description}
            aria-label={`Step ${index + 1} of ${steps.length}: ${step.label}`}
            aria-current={active === index ? 'step' : undefined}
          >
            <Box mt="xl" role="region" aria-label={step.label}>
              <Title
                order={2}
                size="h2"
                mb="lg"
                style={{
                  border: 0,
                  clip: 'rect(0 0 0 0)',
                  height: '1px',
                  margin: '-1px',
                  overflow: 'hidden',
                  padding: 0,
                  position: 'absolute',
                  width: '1px',
                  whiteSpace: 'nowrap',
                  wordWrap: 'normal',
                }}
              >
                {step.title}
              </Title>
              {step.content}
            </Box>
          </Stepper.Step>
        ))}
      </Stepper>

      <Group justify="space-between" mt="xl">
        {active > 0 && (
          <Button
            variant="default"
            onClick={prevStep}
            style={{
              minHeight: rem(minTouchTarget.height),
            }}
          >
            Back
          </Button>
        )}
      </Group>
    </Stack>
  );
}
