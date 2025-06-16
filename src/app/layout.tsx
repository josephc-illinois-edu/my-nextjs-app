import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { ColorSchemeScript } from '@mantine/core';
import { Source_Sans_3 } from 'next/font/google';
import './globals.css';
import { Providers } from './components/Providers';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Metadata } from 'next';

// Initialize the Source Sans 3 font (newer version of Source Sans Pro)
const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Gift Transmittal System - University of Illinois Foundation',
  description:
    'Official gift transmittal system for processing and managing donations to the University of Illinois Foundation',
  keywords: 'University of Illinois, Foundation, Donations, Gift Processing, Transmittal',
  applicationName: 'Gift Transmittal System',
  authors: [{ name: 'University of Illinois Foundation' }],
  themeColor: '#13294B',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={sourceSans.className}>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body>
        <Providers>
          <Header />
          <main
            id="main-content"
            role="main"
            style={{
              minHeight: '70vh',
              position: 'relative',
            }}
          >
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
