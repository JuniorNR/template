export interface User {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  login: string;
}

export interface UserDTO {
  id?: number;
  first_name: string;
  middle_name: string;
  last_name: string;
  email: string;
  login: string;
  password?: string;
}
