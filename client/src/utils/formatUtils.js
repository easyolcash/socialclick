export const formatNumber = (number) => {
  if (typeof number !== 'number') return '0';
  
  if (number >= 1000000) {
    return `${(number / 1000000).toFixed(1)}M`;
  }
  
  if (number >= 1000) {
    return `${(number / 1000).toFixed(1)}K`;
  }
  
  return number.toString();
};

export const truncateText = (text, maxLength = 100) => {
  if (!text || text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
};