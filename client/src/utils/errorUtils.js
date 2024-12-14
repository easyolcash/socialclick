export const handleApiError = (error) => {
  if (error.response) {
    // Server responded with error
    const message = error.response.data.message || error.response.data.error;
    throw new Error(message || 'An error occurred');
  } else if (error.request) {
    // Request made but no response
    throw new Error('No response from server');
  } else {
    // Error setting up request
    throw new Error('Error setting up request');
  }
};