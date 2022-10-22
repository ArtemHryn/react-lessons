import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar';
import { Box } from './Box';

export const Layout = () => {
  return (
    <Box display="grid" gridTemplateColumns="300px 1fr">
      <AppBar />
      <Suspense fallback={<div>Something</div>}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
