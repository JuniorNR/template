import { localStorageAuth } from '@/entities';

export const isTokenValid = (token: string): boolean => {
  try {
    // Простая проверка - можно расширить для JWT
    return token.length > 0;
  } catch {
    return false;
  }
};

export const checkAuthStatus = () => {
  try {
    const token = localStorageAuth.getToken();

    if (!token) {
      return { isAuthenticated: false, error: 'No token found' };
    }

    if (!isTokenValid(token)) {
      localStorageAuth.removeToken();
      return { isAuthenticated: false, error: 'Invalid token' };
    }

    return { isAuthenticated: true, error: null };
  } catch (error) {
    console.debug('Error checking auth status:', error);
    return { isAuthenticated: false, error: 'Auth check failed' };
  }
};
