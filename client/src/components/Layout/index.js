import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const SIDEBAR_WIDTH = 240;

function Layout() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Sidebar width={SIDEBAR_WIDTH} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
          mt: 8
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;