import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    
    // Check if the backend responded with data
    if (response.data && response.data.token) {
      // Store token and user details inside the browser storage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      
      // CRITICAL FIX: Explicitly return response.data.user so it isn't undefined!
      return response.data.user;
    } else {
      throw new Error('Authentication succeeded but server response structure is invalid.');
    }
  } catch (error) {
    const message = error.response?.data?.message || 'Failed to communicate with backend authentication API.';
    throw message;
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};