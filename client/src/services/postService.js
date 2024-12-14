import axios from 'axios';
import { handleApiError } from '../utils/errorUtils';

const API_URL = '/api/posts';

export const fetchPosts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const createPost = async (postData) => {
  try {
    const response = await axios.post(API_URL, postData);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const updatePost = async (postId, postData) => {
  try {
    const response = await axios.put(`${API_URL}/${postId}`, postData);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const deletePost = async (postId) => {
  try {
    await axios.delete(`${API_URL}/${postId}`);
  } catch (error) {
    throw handleApiError(error);
  }
};