import React, { useState } from 'react';
import { Box, Paper, Typography, Tabs, Tab } from '@mui/material';
import PlatformSettings from '../components/settings/PlatformSettings';
import AccountSettings from '../components/settings/AccountSettings';
import NotificationSettings from '../components/settings/NotificationSettings';

function Settings() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>

      <Paper sx={{ mt: 3 }}>
        <Tabs value={activeTab} onChange={handleTabChange}>
          <Tab label="Platforms" />
          <Tab label="Account" />
          <Tab label="Notifications" />
        </Tabs>

        <Box sx={{ p: 3 }}>
          {activeTab === 0 && <PlatformSettings />}
          {activeTab === 1 && <AccountSettings />}
          {activeTab === 2 && <NotificationSettings />}
        </Box>
      </Paper>
    </Box>
  );
}

export default Settings;