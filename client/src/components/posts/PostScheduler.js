import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { DateTimePicker } from '@mui/lab';
import { isValidScheduleTime } from '../../utils/dateUtils';

function PostScheduler({ onSchedule }) {
  const [scheduledTime, setScheduledTime] = useState(null);
  const [error, setError] = useState('');

  const handleSchedule = () => {
    if (!scheduledTime) {
      setError('Please select a time');
      return;
    }

    if (!isValidScheduleTime(scheduledTime)) {
      setError('Selected time must be in the future');
      return;
    }

    onSchedule(scheduledTime);
  };

  return (
    <Box>
      <Typography variant="subtitle2" gutterBottom>
        Schedule Post
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
        <DateTimePicker
          value={scheduledTime}
          onChange={(newValue) => {
            setScheduledTime(newValue);
            setError('');
          }}
          renderInput={(props) => (
            <TextField
              {...props}
              error={!!error}
              helperText={error}
              sx={{ flexGrow: 1 }}
            />
          )}
        />
        <Button
          variant="contained"
          onClick={handleSchedule}
          disabled={!scheduledTime}
        >
          Schedule
        </Button>
      </Box>
    </Box>
  );
}

export default PostScheduler;