import React from 'react';
import { Box, Chip, Typography } from '@mui/material';
import { usePlatforms } from '../../hooks/usePlatforms';
import { getPlatformIcon } from '../../utils/platformUtils';

function PlatformSelector({ selected, onChange }) {
  const { platforms, loading } = usePlatforms();

  const handleToggle = (platformId) => {
    const newSelected = selected.includes(platformId)
      ? selected.filter(id => id !== platformId)
      : [...selected, platformId];
    onChange(newSelected);
  };

  if (loading) {
    return <Typography>Loading platforms...</Typography>;
  }

  return (
    <Box>
      <Typography variant="subtitle2" gutterBottom>
        Select Platforms
      </Typography>
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        {platforms.map((platform) => (
          <Chip
            key={platform.id}
            icon={getPlatformIcon(platform.name)}
            label={platform.name}
            onClick={() => handleToggle(platform.id)}
            color={selected.includes(platform.id) ? 'primary' : 'default'}
            clickable
          />
        ))}
      </Box>
    </Box>
  );
}

export default PlatformSelector;