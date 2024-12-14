import React, { useState } from 'react';
import { Box, TextField, Button, Grid } from '@mui/material';
import { validatePlatformCredentials } from '../../utils/platformUtils';

const CREDENTIAL_FIELDS = {
  Facebook: ['appId', 'appSecret', 'accessToken'],
  Twitter: ['apiKey', 'apiSecret', 'accessToken'],
  LinkedIn: ['clientId', 'clientSecret', 'accessToken'],
  YouTube: ['apiKey', 'clientId', 'clientSecret'],
  Pinterest: ['appId', 'appSecret', 'accessToken'],
  WhatsApp: ['phoneNumber', 'apiKey']
};

function PlatformCredentialsForm({ platform, onSave, onCancel }) {
  const [credentials, setCredentials] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (field) => (event) => {
    setCredentials(prev => ({
      ...prev,
      [field]: event.target.value
    }));
    setErrors(prev => ({
      ...prev,
      [field]: ''
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validation = validatePlatformCredentials(platform.name, credentials);
    if (!validation) {
      setErrors({ _form: 'Please fill in all required fields' });
      return;
    }

    onSave(credentials);
  };

  const fields = CREDENTIAL_FIELDS[platform.name] || [];

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, p: 2, bgcolor: 'grey.50' }}>
      <Grid container spacing={2}>
        {fields.map((field) => (
          <Grid item xs={12} key={field}>
            <TextField
              fullWidth
              label={field.charAt(0).toUpperCase() + field.slice(1)}
              value={credentials[field] || ''}
              onChange={handleChange(field)}
              error={!!errors[field]}
              helperText={errors[field]}
              required
            />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
        <Button type="submit" variant="contained">
          Save
        </Button>
        <Button onClick={onCancel}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
}

export default PlatformCredentialsForm;