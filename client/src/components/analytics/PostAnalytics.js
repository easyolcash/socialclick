import React from 'react';
import { Card, CardContent, Typography, Grid, CircularProgress } from '@mui/material';
import { usePostAnalytics } from '../../hooks/usePostAnalytics';
import { formatNumber } from '../../utils/formatUtils';

function PostAnalytics({ postId }) {
  const { analytics, loading, error } = usePostAnalytics(postId);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  if (!analytics) {
    return null;
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Post Performance
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography variant="subtitle2">Impressions</Typography>
            <Typography variant="h6">{formatNumber(analytics.impressions)}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle2">Engagements</Typography>
            <Typography variant="h6">{formatNumber(analytics.engagements)}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle2">Clicks</Typography>
            <Typography variant="h6">{formatNumber(analytics.clicks)}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default PostAnalytics;