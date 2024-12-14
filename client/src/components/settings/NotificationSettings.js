import React, { useState } from 'react';
import { Box, Typography, FormGroup, FormControlLabel, Switch, Button, Alert } from '@mui/material';

function NotificationSettings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    postPublished: true,
    postFailed: true,
    weeklyReport: false
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (event) => {
    setSettings({
      ...settings,
      [event.target.name]: event.target.checked
    });
  };

  const handleSave = async () => {
    try {
      // Implement save notification settings logic here
      setStatus({ type: 'success', message: 'Notification settings updated successfully' });
    } catch (error) {
      setStatus({ type: 'error', message: error.message });
    }
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Notification Settings
      </Typography>

      {status.message && (
        <Alert severity={status.type} sx={{ mb: 2 }}>
          {status.message}
        </Alert>
      )}

      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={settings.emailNotifications}
              onChange={handleChange}
              name="emailNotifications"
            />
          }
          label="Email Notifications"
        />
        <FormControlLabel
          control={
            <Switch
              checked={settings.postPublished}
              onChange={handleChange}
              name="postPublished"
            />
          }
          label="Notify when posts are published"
        />
        <FormControlLabel
          control={
            <Switch
              checked={settings.postFailed}
              onChange={handleChange}
              name="postFailed"
            />
          }
          label="Notify when posts fail to publish"
        />
        <FormControlLabel
          control={
            <Switch
              checked={settings.weeklyReport}
              onChange={handleChange}
              name="weeklyReport"
            />
          }
          label="Weekly performance report"
        />
      </FormGroup>

      <Button
        variant="contained"
        onClick={handleSave}
        sx={{ mt: 3 }}
      >
        Save Settings
      </Button>
    </Box>
  );
}

export default NotificationSettings;