import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeDefinitions } from './routeDefinitions';

const lazyRouteEntries = routeDefinitions.map((route) => ({
  ...route,
  Component: lazy(route.load),
}));

const ClientRoutes = () => (
  <Routes>
    {lazyRouteEntries.map(({ path, Component }) => (
      <Route key={path} path={path} element={<Component />} />
    ))}
  </Routes>
);

export default ClientRoutes;
