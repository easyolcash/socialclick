import axios from 'axios';
import { handleApiError } from '../utils/errorUtils';

const API_URL = '/api/auth';

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    const { token, user } = response.data;
    localStorage.setItem('token', token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return user;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const registerUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { email, password });
    const { token, user } = response.data;
    localStorage.setItem('token', token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return user;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const logoutUser = async () => {
  localStorage.removeItem('token');
  delete axios.defaults.headers.common['Authorization'];
};

export const getCurrentUser = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) return null;

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const response = await axios.get(`${API_URL}/me`);
    return response.data;
  } catch (error) {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    return null;
  }
};