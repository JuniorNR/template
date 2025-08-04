import type { User, UserDTO } from '@/entities/types';

export interface ApiAuthRequest {
  user: User;
  token: string;
}

export interface ApiAuthResponse {
  user: UserDTO;
  token: string;
}
