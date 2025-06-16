'use client';

import {
  Group,
  Title,
  Button,
  Box,
  Container,
  rem,
  Menu,
  Burger,
  Text,
  useMantineTheme,
  Anchor,
  Stack,
} from '@mantine/core';
import {
  IconPlus,
  IconHistory,
  IconSettings,
  IconSearch,
  IconChevronDown,
  IconHome,
  IconHelp,
} from '@tabler/icons-react';
import Link from 'next/link';
import { uifColors } from '../theme';
import { useState, useEffect } from 'react';
import { mediaQueries } from '../lib/responsive';
import { a11yHelpers, keyboardNavigation } from '../lib/accessibility';

export function Header() {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const theme = useMantineTheme();

  // Close mobile menu when pressing Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileMenuOpened) {
        setMobileMenuOpened(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpened]);

  const navigationItems = [
    { label: 'Home', href: '/', icon: IconHome },
    { label: 'New Transmittal', href: '/new-transmittal', icon: IconPlus },
    { label: 'Search Transmittals', href: '/search', icon: IconSearch },
    { label: 'History', href: '/history', icon: IconHistory },
    { label: 'Help', href: '/help', icon: IconHelp },
  ];

  return (
    <>
      <Box
        component="a"
        href="#main-content"
        style={{
          position: 'absolute',
          top: -40,
          left: 0,
          backgroundColor: theme.white,
          padding: theme.spacing.md,
          zIndex: 1000,
          '&:focus': {
            top: 0,
          },
        }}
      >
        Skip to main content
      </Box>

      <Box
        component="header"
        style={{ backgroundColor: uifColors.illinoisBlue }}
        p={{ base: 'xs', sm: 'md' }}
        role="banner"
      >
        <Container size="xl">
          <Group justify="space-between" align="center" wrap="nowrap">
            <Group wrap="nowrap">
              <Link href="/" passHref style={{ textDecoration: 'none' }}>
                <Title
                  order={1}
                  size="h2"
                  c="white"
                  style={{ whiteSpace: 'nowrap' }}
                  role="heading"
                  aria-level={1}
                >
                  Gift Transmittal
                </Title>
              </Link>
            </Group>

            <Group gap="sm" visibleFrom="sm" role="navigation" aria-label="Main navigation">
              {navigationItems.map((item) => (
                <Button
                  key={item.href}
                  component={Link}
                  href={item.href}
                  variant="subtle"
                  color="gray.0"
                  leftSection={<item.icon size={20} />}
                  styles={{
                    root: {
                      minHeight: rem(44),
                      '&:focus': {
                        outline: `2px solid ${theme.white}`,
                        outlineOffset: '2px',
                      },
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Group>

            <Burger
              hiddenFrom="sm"
              opened={mobileMenuOpened}
              onClick={() => setMobileMenuOpened(!mobileMenuOpened)}
              color="white"
              size="sm"
              aria-label={mobileMenuOpened ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpened}
              aria-controls="mobile-menu"
            />
          </Group>
        </Container>
      </Box>

      {mobileMenuOpened && (
        <Box
          id="mobile-menu"
          role="navigation"
          aria-label="Mobile navigation"
          style={{
            position: 'fixed',
            top: rem(60),
            left: 0,
            right: 0,
            backgroundColor: uifColors.illinoisBlue,
            zIndex: 100,
          }}
          p="md"
        >
          <Stack gap="xs">
            {navigationItems.map((item) => (
              <Button
                key={item.href}
                component={Link}
                href={item.href}
                variant="subtle"
                color="gray.0"
                fullWidth
                leftSection={<item.icon size={20} />}
                onClick={() => setMobileMenuOpened(false)}
                styles={{
                  root: {
                    minHeight: rem(44),
                    justifyContent: 'flex-start',
                    '&:focus': {
                      outline: `2px solid ${theme.white}`,
                      outlineOffset: '2px',
                    },
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>
        </Box>
      )}
    </>
  );
}
