/* eslint-disable no-console */
import { localStorageAuth } from '@/entities';

// Проверка структуры API токена (формат: id|random_string)
const isValidAPITokenStructure = (token: string): boolean => {
  try {
    const parts = token.split('|');
    return (
      parts.length === 2 &&
      parts[0].length > 0 &&
      parts[1].length > 0 &&
      !isNaN(Number(parts[0]))
    );
  } catch {
    return false;
  }
};

// Проверка минимальной длины токена
const hasMinimumLength = (token: string): boolean => {
  const minLengthApiToken = 20;
  return token.length >= minLengthApiToken;
};

// Проверка на наличие только допустимых символов
const hasValidCharacters = (token: string): boolean => {
  // Проверяем, что токен содержит только буквы, цифры и символ |
  const validPattern = /^[a-zA-Z0-9|]+$/;
  return validPattern.test(token);
};

export const isTokenValid = (token: string): boolean => {
  try {
    if (!token || token.trim().length === 0) {
      return false;
    }

    // Проверяем структуру API токена
    if (!isValidAPITokenStructure(token)) {
      console.debug('Invalid token structure:', token);
      return false;
    }

    // Проверяем минимальную длину
    if (!hasMinimumLength(token)) {
      console.debug('Token too short:', token);
      return false;
    }

    // Проверяем допустимые символы
    if (!hasValidCharacters(token)) {
      console.debug('Token contains invalid characters:', token);
      return false;
    }

    return true;
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
      return { isAuthenticated: false, error: 'Invalid token format' };
    }

    return { isAuthenticated: true, error: null };
  } catch (error) {
    console.debug('Error checking auth status:', error);
    return { isAuthenticated: false, error: 'Auth check failed' };
  }
};

// Функция для получения ID пользователя из токена
export const getUserIdFromToken = (token: string): number | null => {
  try {
    if (!isTokenValid(token)) {
      return null;
    }

    const parts = token.split('|');
    return Number(parts[0]);
  } catch {
    return null;
  }
};

// Функция для получения хеша токена
export const getTokenHash = (token: string): string | null => {
  try {
    if (!isTokenValid(token)) {
      return null;
    }

    const parts = token.split('|');
    return parts[1];
  } catch {
    return null;
  }
};
