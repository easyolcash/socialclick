import axios from 'axios';
import { handleApiError } from '../utils/errorUtils';

const API_URL = '/api/analytics';

export const fetchPostAnalytics = async (postId) => {
  try {
    const response = await axios.get(`${API_URL}/posts/${postId}`);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const fetchPlatformAnalytics = async (platformId, dateRange) => {
  try {
    const response = await axios.get(`${API_URL}/platforms/${platformId}`, {
      params: dateRange
    });
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const fetchAnalyticsReport = async (filters) => {
  try {
    const response = await axios.post(`${API_URL}/report`, filters);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};