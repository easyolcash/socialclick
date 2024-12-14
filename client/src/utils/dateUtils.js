import { format, formatDistanceToNow, isValid } from 'date-fns';

export const formatDate = (date) => {
  if (!date || !isValid(new Date(date))) {
    return '';
  }
  return format(new Date(date), 'PPP');
};

export const formatTime = (date) => {
  if (!date || !isValid(new Date(date))) {
    return '';
  }
  return format(new Date(date), 'p');
};

export const formatRelativeTime = (date) => {
  if (!date || !isValid(new Date(date))) {
    return '';
  }
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};

export const isValidScheduleTime = (date) => {
  if (!date || !isValid(new Date(date))) {
    return false;
  }
  return new Date(date) > new Date();
};