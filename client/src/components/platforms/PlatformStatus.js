import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText, Chip } from '@mui/material';
import { usePlatformStatus } from '../../hooks/usePlatformStatus';
import { getPlatformIcon } from '../../utils/platformUtils';

function PlatformStatus() {
  const { statuses, loading } = usePlatformStatus();

  if (loading) {
    return <Typography>Loading platform status...</Typography>;
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Platform Status
        </Typography>
        <List>
          {statuses.map((status) => (
            <ListItem key={status.platform}>
              <ListItemIcon>
                {getPlatformIcon(status.platform)}
              </ListItemIcon>
              <ListItemText primary={status.platform} />
              <Chip
                label={status.connected ? 'Connected' : 'Not Connected'}
                color={status.connected ? 'success' : 'error'}
                size="small"
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default PlatformStatus;