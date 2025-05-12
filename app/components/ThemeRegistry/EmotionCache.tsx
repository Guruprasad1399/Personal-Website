'use client';

import * as React from 'react';
import createCache from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation';
import { CacheProvider as DefaultCacheProvider } from '@emotion/react';

export type NextAppDirEmotionCacheProviderProps = {
  options: Parameters<typeof createCache>[0];
  CacheProvider?: React.ComponentType<{
    value: ReturnType<typeof createCache>;
    children: React.ReactNode;
  }>;
  children: React.ReactNode;
};

export default function EmotionCache(props: NextAppDirEmotionCacheProviderProps) {
  const { options, CacheProvider = DefaultCacheProvider, children } = props;

  const [registry] = React.useState(() => {
    const cache = createCache(options);
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const [selector, serialized] = args;
      if (selector === '') {
        return '';
      }

      if (serialized.name !== undefined && inserted.indexOf(serialized.name) === -1) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const inserted = registry.flush();
    if (inserted.length === 0) {
      return null;
    }
    let styles = '';
    let dataEmotionAttribute = registry.cache.key;

    inserted.forEach((name) => {
      styles += registry.cache.inserted[name];
    });

    return (
      <style
        key={registry.cache.key}
        data-emotion={dataEmotionAttribute}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return <CacheProvider value={registry.cache}>{children}</CacheProvider>;
}
