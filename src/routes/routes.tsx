// pages
import { NoPage } from '../pages/NoPage/NoPage';
import { MosaicPage } from '../pages/MosaicPage/MosaicPage';
// types
import { Routes } from '../types/types';

export const publicRoutes: Routes[] = [
  {
    path: '*',
    element: <NoPage />,
  },
  {
    path: '/',
    element: <MosaicPage />,
  },
];
