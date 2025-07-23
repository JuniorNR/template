'use client';
import { type FC } from 'react';

const Login: FC = () => {
  return (
    <div>
      <form>
        <input type='email' />
        <input type='password' />
        <input type='submit' />
      </form>
    </div>
  );
};

export default Login;
