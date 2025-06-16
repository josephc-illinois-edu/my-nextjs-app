'use client';

import { useEffect, useState, type ReactNode } from 'react';

interface ClientOnlyProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return fallback;
  }

  return children;
}

export function useHydrated() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return hydrated;
}

interface DeferredContentProps {
  children: ReactNode;
  fallback?: ReactNode;
  skip?: boolean;
}

export function DeferredContent({ children, fallback = null, skip = false }: DeferredContentProps) {
  const [shouldRender, setShouldRender] = useState(skip);

  useEffect(() => {
    if (!skip) {
      // Defer the rendering to the next frame after hydration
      const timeoutId = setTimeout(() => {
        setShouldRender(true);
      }, 0);

      return () => clearTimeout(timeoutId);
    }
  }, [skip]);

  if (!shouldRender) {
    return fallback;
  }

  return children;
}
