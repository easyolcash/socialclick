export const validatePostContent = (content, platforms) => {
  const errors = {};
  
  // Check content length for different platforms
  if (platforms.includes('Twitter') && content.length > 280) {
    errors.twitter = 'Twitter posts cannot exceed 280 characters';
  }
  
  if (platforms.includes('LinkedIn') && content.length > 3000) {
    errors.linkedin = 'LinkedIn posts cannot exceed 3000 characters';
  }
  
  // Check for required hashtags
  if (platforms.includes('Instagram') && !content.includes('#')) {
    errors.instagram = 'Instagram posts should include at least one hashtag';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateMediaAttachment = (file, platforms) => {
  const errors = {};
  const maxSize = 10 * 1024 * 1024; // 10MB
  
  if (file.size > maxSize) {
    errors.size = 'File size cannot exceed 10MB';
  }
  
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'video/mp4'];
  if (!allowedTypes.includes(file.type)) {
    errors.type = 'Invalid file type. Supported types: JPG, PNG, GIF, MP4';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};