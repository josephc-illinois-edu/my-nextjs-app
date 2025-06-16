'use client';

import Image from 'next/image';
import { Container, Title, Tabs } from '@mantine/core';
import { DonorForm } from './components/DonorForm';
import { useEffect } from 'react';
import { db } from './lib/db';

export default function Home() {
  useEffect(() => {
    // Initialize the database
    db.open().catch((err) => {
      console.error('Failed to open db:', err);
    });
  }, []);

  return (
    <Container
      size="lg"
      py="xl"
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
    >
      <Title order={1} mb="xl">
        Donor Management System
      </Title>
      <Tabs defaultValue="donors">
        <Tabs.List>
          <Tabs.Tab value="donors">Add Donor</Tabs.Tab>
          <Tabs.Tab value="donations">Donations</Tabs.Tab>
          <Tabs.Tab value="reports">Reports</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="donors" pt="xl">
          <DonorForm />
        </Tabs.Panel>

        <Tabs.Panel value="donations" pt="xl">
          <Title order={2}>Donations Coming Soon</Title>
        </Tabs.Panel>

        <Tabs.Panel value="reports" pt="xl">
          <Title order={2}>Reports Coming Soon</Title>
        </Tabs.Panel>
      </Tabs>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
          Go to nextjs.org →
        </a>
      </footer>
    </Container>
  );
}
