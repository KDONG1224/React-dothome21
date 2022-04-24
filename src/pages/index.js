import { lazy } from 'react';

export * from './sample';
export * from './masul';

export const LazyHomePage = lazy(() => import('./HomePage'));
