'use client';
import { type FC } from 'react';

import type { UserDTO } from '@/entities/types';
import { handleFetch } from '@/shared/lib';

const Registration: FC = () => {
  return (
    <div>
      <form>
        <input
          type='text'
          placeholder='First name'
          value='Иван'
        />
        <input
          type='text'
          placeholder='Middle name'
          value='Иванович'
        />
        <input
          type='text'
          placeholder='Last name'
          value='Иванов'
        />
        <input
          type='text'
          placeholder='Login'
          value='ivanov'
        />
        <input
          type='email'
          placeholder='Email'
          value='ivanov@gmail.com'
        />
        <input
          type='password'
          placeholder='Password'
          value='12345678'
        />
        <input
          type='submit'
          onClick={(event: React.MouseEvent<HTMLInputElement>) => {
            event.preventDefault();
            handleFetch<UserDTO>('/register', {
              method: 'POST',
              data: {
                first_name: 'Иван',
                middle_name: 'Иванович',
                last_name: 'Иванов',
                login: 'ivanov',
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

export default Registration;
