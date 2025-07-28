import type { FC } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';

import { localStorageAuth } from '@/entities';
import type { UserDTO } from '@/entities/types';
import { Form, TextField } from '@/shared';
import { ApiRoutes, handleFetch } from '@/shared/lib';

import { loginFormSchema } from '../model/schemas/LoginForm.schema';

import styles from './LoginForm.module.scss';

import type { FormValues } from '../model/schemas/LoginForm.schema';

export const LoginForm: FC = () => {
  const router = useRouter();
  const {
    formState: { errors, isSubmitting, isValid },
    handleSubmit,
    control,
  } = useForm<FormValues>({
    resolver: zodResolver(loginFormSchema),
    mode: 'onChange',
  });
  const onSubmit = handleSubmit(async (dataToServer: FormValues) => {
    const { data } = await handleFetch<UserDTO, { data: UserDTO }>(
      ApiRoutes.LOGIN,
      {
        method: 'POST',
        data: {
          email: dataToServer.email,
          password: dataToServer.password,
        },
      },
    );

    if (data.token) {
      localStorageAuth.saveToken(data.token);
      router.push('/');
    }
  });

  return (
    <div className={styles.LoginForm}>
      <Form
        title='Login'
        titleSubmitButton='Login'
        isValid={isValid}
        loading={isSubmitting}
        errors={errors}
        onSubmit={onSubmit}
      >
        <Controller
          render={({ field, fieldState }) => {
            return (
              <TextField
                type='email'
                label='Email'
                status={fieldState.error ? 'error' : undefined}
                helperText={fieldState.error?.message}
                {...field}
              />
            );
          }}
          name='email'
          control={control}
        />
        <Controller
          render={({ field, fieldState }) => {
            return (
              <TextField
                type='password'
                label='Password'
                status={fieldState.error ? 'error' : undefined}
                helperText={fieldState.error?.message}
                {...field}
              />
            );
          }}
          name='password'
          control={control}
        />
      </Form>
    </div>
  );
};
