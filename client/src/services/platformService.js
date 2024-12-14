import axios from 'axios';
import { handleApiError } from '../utils/errorUtils';

const API_URL = '/api/platforms';

export const fetchPlatforms = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const fetchPlatformStatus = async () => {
  try {
    const response = await axios.get(`${API_URL}/status`);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const savePlatformCredentials = async (platformId, credentials) => {
  try {
    const response = await axios.post(`${API_URL}/${platformId}/credentials`, credentials);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const validatePlatformCredentials = async (platformId, credentials) => {
  try {
    const response = await axios.post(`${API_URL}/${platformId}/validate`, credentials);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};