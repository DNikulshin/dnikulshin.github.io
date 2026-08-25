'use client';

import { useQuery } from '@tanstack/react-query';
import {
  fetchReposMeta,
  GitHubRateLimitError,
  type LiveRepoMeta,
} from '@/services/github/client-repo-meta';

/** Данные считаются свежими 30 минут */
const STALE_TIME = 1000 * 60 * 30;

/** Держим в памяти 12 часов */
const GC_TIME = 1000 * 60 * 60 * 12;

export type LiveRepoMetaMap = Record<string, LiveRepoMeta>;

/**
 * Fetches live repository metadata (stargazerCount + updatedAt).
 * Falls back to build-time values when offline or rate-limited.
 *
 * Caching strategy:
 * - initialData → мгновенный показ данных из билда
 * - refetchOnMount: 'always' → сразу фоновый refetch live-данных
 * - staleTime 30 min → после успешного fetch кэш на 30 минут
 * - gcTime 12 h
 * - refetchOnWindowFocus: false
 * - refetchOnReconnect: true
 *
 * Error handling:
 * - Rate limit → без retry, остаёмся на initialData
 * - Остальные ошибки → 1 retry, потом fallback
 */
export function useLiveRepoMeta(repoNames: string[], initialMeta: LiveRepoMetaMap) {
  const stableKey = repoNames.slice().sort().join(',');

  return useQuery({
    queryKey: ['github-live-repo-meta', stableKey],
    queryFn: () => fetchReposMeta(repoNames),
    initialData: initialMeta,
    staleTime: STALE_TIME,
    gcTime: GC_TIME,
    // Всегда делаем фоновый refetch при маунте (даже если initialData «свежие»)
    refetchOnMount: 'always',
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,

    // Rate limit не ретраим, обычные ошибки — 1 раз
    retry: (failureCount, error) => {
      if (error instanceof GitHubRateLimitError) return false;
      return failureCount < 1;
    },
    retryDelay: 2000,

    // При любой ошибке продолжаем показывать initial / предыдущие данные
    placeholderData: (prev) => prev ?? initialMeta,

    // Не даём ошибке всплыть в ErrorBoundary
    throwOnError: false,
  });
}
