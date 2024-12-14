import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import PostList from '../components/posts/PostList';
import ScheduledPosts from '../components/posts/ScheduledPosts';
import PlatformStatus from '../components/platforms/PlatformStatus';
import { fetchPosts } from '../services/postService';

function Dashboard() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error('Error loading posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <PostList posts={posts} loading={loading} />
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Box sx={{ mb: 3 }}>
            <PlatformStatus />
          </Box>
          <ScheduledPosts />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;