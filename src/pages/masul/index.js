import { lazy } from 'react';

export const LazyMasulPage = lazy(
  () => import('./MasulPage')
);