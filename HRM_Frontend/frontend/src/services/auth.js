import axios from 'axios';

// This is the base URL of our Node.js backend
const API_URL = 'http://localhost:5000/api/auth';

// Function to handle logging in
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });
    
    // If successful, the backend sends back the user data + JWT token.
    // We save this token in the browser's Local Storage so they stay logged in.
    if (response.data.token) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    
    return response.data;
  } catch (error) {
    // If the login fails (wrong password, etc.), we catch the error and throw it to the UI
    throw error.response?.data?.message || 'Something went wrong';
  }
};

// Function to handle logging out
export const logout = () => {
  localStorage.removeItem('user');
};