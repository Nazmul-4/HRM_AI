import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_AUTH_API_URL || 'http://localhost:5000/api/auth';
const TOKEN_KEY = 'token';
const USER_KEY = 'user';

export const normalizeRole = (role) => String(role || '').trim().toLowerCase();

export const getDashboardPathForRole = (role) => {
  const normalizedRole = normalizeRole(role);

  if (normalizedRole === 'company') {
    return '/company/dashboard';
  }

  if (normalizedRole === 'hr') {
    return '/dashboard/hr';
  }

  return null;
};

export const persistAuthSession = ({ token, user }) => {
  if (!token || !user) {
    throw new Error('Authentication response is missing token or user profile.');
  }

  const normalizedUser = {
    ...user,
    role: normalizeRole(user.role),
  };

  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(normalizedUser));

  return normalizedUser;
};

export const getStoredSession = () => {
  if (typeof window === 'undefined') {
    return null;
  }

  const storedUser = localStorage.getItem(USER_KEY);
  if (!storedUser) {
    return null;
  }

  try {
    const parsedUser = JSON.parse(storedUser);
    const user = parsedUser?.user || parsedUser;
    const token = localStorage.getItem(TOKEN_KEY) || parsedUser?.token;

    if (!token || !user?.role) {
      return null;
    }

    const normalizedUser = {
      ...user,
      role: normalizeRole(user.role),
    };

    if (!localStorage.getItem(TOKEN_KEY) || parsedUser?.user) {
      persistAuthSession({ token, user: normalizedUser });
    }

    return { token, user: normalizedUser };
  } catch {
    logout();
    return null;
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    
    if (response.data?.token && response.data?.user) {
      return persistAuthSession({
        token: response.data.token,
        user: response.data.user,
      });
    } else {
      throw new Error('Authentication succeeded but server response structure is invalid.');
    }
  } catch (error) {
    const message = error.response?.data?.message || error.message || 'Failed to communicate with backend authentication API.';
    throw message;
  }
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
};
