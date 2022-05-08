import Home from 'src/app/modules/Home/Home';
import React from 'react';
import NotFoundPage from 'src/app/pages/NotFoundPage';
import CartPage from 'src/app/modules/Cart/pages/CartPage';

export enum RoutePaths {
  HOME = '/',
  NOT_FOUND = '*',
  CART = '/cart',
  FAVORITE = '/favorite',
  PROFILE = '/profile',
}

export interface RouteTypes {
  element: JSX.Element;
  index: boolean;
  path?: RoutePaths;
}

export const PUBLIC_ROUTES: RouteTypes[] = [
  { element: <Home />, index: false, path: RoutePaths.HOME },
  { element: <NotFoundPage />, index: false, path: RoutePaths.NOT_FOUND },
  { element: <Home />, index: true },
  { element: <CartPage />, index: false, path: RoutePaths.CART },
];
