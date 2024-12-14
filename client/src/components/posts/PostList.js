import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import PostCard from './PostCard';

function PostList({ posts, loading }) {
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!posts.length) {
    return (
      <Typography variant="body1" color="text.secondary" align="center">
        No posts yet. Create your first post!
      </Typography>
    );
  }

  return (
    <Box>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Box>
  );
}

export default PostList;