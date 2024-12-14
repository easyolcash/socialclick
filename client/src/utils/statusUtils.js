export const getStatusColor = (status) => {
  const colors = {
    pending: 'default',
    published: 'success',
    failed: 'error',
    draft: 'info',
    scheduled: 'warning'
  };

  return colors[status] || 'default';
};

export const getStatusText = (status) => {
  const texts = {
    pending: 'Pending',
    published: 'Published',
    failed: 'Failed',
    draft: 'Draft',
    scheduled: 'Scheduled'
  };

  return texts[status] || status;
};