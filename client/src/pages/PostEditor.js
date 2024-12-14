import React, { useState } from 'react';
import { Box, Paper, TextField, Button, Chip, Grid } from '@mui/material';
import { DateTimePicker } from '@mui/lab';
import PlatformSelector from '../components/posts/PlatformSelector';
import { createPost } from '../services/postService';

function PostEditor() {
  const [content, setContent] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [scheduledTime, setScheduledTime] = useState(null);

  const handleSubmit = async () => {
    try {
      await createPost({
        content,
        platforms: selectedPlatforms,
        scheduledTime
      });
      // Handle success
    } catch (error) {
      // Handle error
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ p: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={4}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              label="Post Content"
            />
          </Grid>
          
          <Grid item xs={12}>
            <PlatformSelector
              selected={selectedPlatforms}
              onChange={setSelectedPlatforms}
            />
          </Grid>
          
          <Grid item xs={12}>
            <DateTimePicker
              label="Schedule Post"
              value={scheduledTime}
              onChange={setScheduledTime}
              renderInput={(props) => <TextField {...props} />}
            />
          </Grid>
          
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              disabled={!content || selectedPlatforms.length === 0}
            >
              {scheduledTime ? 'Schedule Post' : 'Post Now'}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default PostEditor;