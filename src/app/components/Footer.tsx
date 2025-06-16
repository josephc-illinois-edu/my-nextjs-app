'use client';

import { Group, Text, Box, Container, Anchor, useMantineTheme, Stack } from '@mantine/core';
import { mediaQueries } from '../lib/responsive';

export function Footer() {
  const theme = useMantineTheme();
  const currentYear = new Date().getFullYear();

  const linkStyles = {
    minHeight: theme.other.minTouchTarget.height,
    display: 'inline-flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.xs,
    paddingRight: theme.spacing.xs,
  };

  return (
    <Box component="footer" bg="gray.1" p={{ base: 'sm', sm: 'md' }} mt="auto" role="contentinfo">
      <Container size="xl">
        <Stack gap="sm" hiddenFrom="sm">
          <Text size="sm" c="dimmed" ta="center">
            © {currentYear} University of Illinois Foundation
          </Text>
          <Group gap="md" justify="center">
            <Anchor href="#" size="sm" style={linkStyles}>
              Privacy Policy
            </Anchor>
            <Anchor href="#" size="sm" style={linkStyles}>
              Terms of Use
            </Anchor>
            <Anchor href="#" size="sm" style={linkStyles}>
              Contact Support
            </Anchor>
          </Group>
        </Stack>

        <Group justify="space-between" align="center" visibleFrom="sm" wrap="wrap">
          <Text size="sm" c="dimmed">
            © {currentYear} University of Illinois Foundation
          </Text>
          <Group gap="lg">
            <Anchor href="#" size="sm" style={linkStyles}>
              Privacy Policy
            </Anchor>
            <Anchor href="#" size="sm" style={linkStyles}>
              Terms of Use
            </Anchor>
            <Anchor href="#" size="sm" style={linkStyles}>
              Contact Support
            </Anchor>
          </Group>
        </Group>
      </Container>
    </Box>
  );
}
