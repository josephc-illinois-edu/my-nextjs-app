'use client';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { ReactNode, useEffect, useState } from 'react';

const theme = createTheme({
  primaryColor: 'blue',
  defaultRadius: 'md',
});

export function Providers({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      <Notifications />
      {mounted ? children : null}
    </MantineProvider>
  );
}
