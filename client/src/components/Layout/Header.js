import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import { AccountCircle, Notifications } from '@mui/icons-material';
import { useAuth } from '../../contexts/AuthContext';

function Header() {
  const { user } = useAuth();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Social Poster
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit">
            <Notifications />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <Typography variant="body2" sx={{ ml: 1 }}>
            {user?.email}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;