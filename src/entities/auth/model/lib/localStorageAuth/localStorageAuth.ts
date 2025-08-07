export const localStorageAuth = {
  saveToken: (token: string) => {
    localStorage.setItem('auth_token', token);
  },
  getToken: () => {
    return localStorage.getItem('auth_token');
  },
  removeToken: () => {
    localStorage.removeItem('auth_token');
  },
};
