import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, Chip, Box } from '@mui/material';
import { formatDistanceToNow } from 'date-fns';
import { getPlatformIcon } from '../../utils/platformUtils';
import { getStatusColor } from '../../utils/statusUtils';

function PostCard({ post }) {
  const { content, created_at, platforms, status } = post;

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="body1" gutterBottom>
          {content}
        </Typography>
        
        <Typography variant="caption" color="text.secondary">
          Posted {formatDistanceToNow(new Date(created_at))} ago
        </Typography>
        
        <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {platforms.map((platform) => (
            <Chip
              key={platform.id}
              icon={getPlatformIcon(platform.name)}
              label={platform.name}
              size="small"
              color={getStatusColor(platform.status)}
            />
          ))}
        </Box>
      </CardContent>
      
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}

export default PostCard;