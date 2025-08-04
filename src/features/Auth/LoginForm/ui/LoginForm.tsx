import type { FC } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';

import { localStorageAuth, useAuth } from '@/entities';
import { Form, TextField } from '@/shared';

import { loginFormSchema } from '../model/schemas/LoginForm.schema';

import styles from './LoginForm.module.scss';

import type { FormValues } from '../model/schemas/LoginForm.schema';

export const LoginForm: FC = () => {
  const router = useRouter();
  const { loginUserData } = useAuth();
  const {
    formState: { errors, isSubmitting, isValid },
    handleSubmit,
    control,
  } = useForm<FormValues>({
    resolver: zodResolver(loginFormSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = handleSubmit(async (dataToServer: FormValues) => {
    const data = await loginUserData(dataToServer);

    if (data && localStorageAuth.getToken()) {
      // router.push('/');
      router.replace('/', { scroll: false });
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
