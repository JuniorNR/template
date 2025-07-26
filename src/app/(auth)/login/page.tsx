'use client';
import { type FC } from 'react';

import type { UserDTO } from '@/entities/types';
import { handleFetch } from '@/shared/lib';

const Login: FC = () => {
  return (
    <div>
      <form>
        <input type='email' />
        <input type='password' />
        <input
          type='submit'
          onClick={(event: React.MouseEvent<HTMLInputElement>) => {
            event.preventDefault();
            handleFetch<UserDTO>('/login', {
              method: 'POST',
              data: {
                email: 'ivanov@gmail.com',
                password: '12345678',
              },
            });
          }}
        />
      </form>
    </div>
  );
};

export default Login;
