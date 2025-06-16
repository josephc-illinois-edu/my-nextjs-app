'use client';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { ReactNode } from 'react';
import { ClientOnly } from './client/ClientOnly';
import { theme } from '../theme';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      <Notifications />
      <ClientOnly fallback={null}>{children}</ClientOnly>
    </MantineProvider>
  );
}
