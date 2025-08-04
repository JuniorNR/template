export interface User {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  login: string;
}

export interface UserDTO {
  id: number;
  first_name: string;
  middle_name: string;
  last_name: string;
  email: string;
  login: string;
}

export type UserPublicFields = Pick<
  User,
  'firstName' | 'middleName' | 'lastName'
>;

export type UserPrivateFields = Pick<User, 'email' | 'login'>;

export type UserPasswordFields = {
  password: string;
  password_confirmation: string;
};

// Типы для регистрации
export type RegisterUserData = Omit<User, 'id'> & UserPasswordFields;

// Типы для авторизации
export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: UserDTO;
  token: string;
}
