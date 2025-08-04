import type { FC } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';

import { localStorageAuth, useAuth, useUser } from '@/entities';
import { Form, TextField } from '@/shared';
import { classNames } from '@/shared/lib';

import {
  registrationFormSchema,
  type FormValues,
} from '../model/schemas/RegistrationForm.schema';

import styles from './RegistrationForm.module.scss';

export const RegistrationForm: FC = () => {
  const router = useRouter();
  const { registerData } = useAuth();
  const {
    formState: { errors, isSubmitting, isValid },
    handleSubmit,
    control,
  } = useForm<FormValues>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues: {
      login: '',
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      password: '',
      password_confirmation: '',
    },
    mode: 'onChange',
  });
  const onSubmit = handleSubmit(async (dataToServer: FormValues) => {
    const data = await registerData(dataToServer);
    if (data && localStorageAuth.getToken()) {
      router.push('/');
    }
  });

  return (
    <div className={classNames(styles.registrationForm)}>
      <Form
        title='Registration'
        titleSubmitButton='Registration'
        isValid={isValid}
        loading={isSubmitting}
        errors={errors}
        onSubmit={onSubmit}
      >
        <Controller
          render={({ field, fieldState }) => {
            return (
              <TextField
                type='text'
                label='Login'
                placeholder='Enter...'
                status={fieldState.error ? 'error' : undefined}
                helperText={fieldState.error?.message}
                {...field}
              />
            );
          }}
          name='login'
          control={control}
        />
        <Controller
          render={({ field, fieldState }) => {
            return (
              <TextField
                type='text'
                label='First name'
                placeholder='Enter...'
                status={fieldState.error ? 'error' : undefined}
                helperText={fieldState.error?.message}
                {...field}
              />
            );
          }}
          name='firstName'
          control={control}
        />
        <Controller
          render={({ field, fieldState }) => {
            return (
              <TextField
                type='text'
                label='Middle name'
                placeholder='Enter...'
                status={fieldState.error ? 'error' : undefined}
                helperText={fieldState.error?.message}
                {...field}
              />
            );
          }}
          name='middleName'
          control={control}
        />
        <Controller
          render={({ field, fieldState }) => {
            return (
              <TextField
                type='text'
                label='Last name'
                placeholder='Enter...'
                status={fieldState.error ? 'error' : undefined}
                helperText={fieldState.error?.message}
                {...field}
              />
            );
          }}
          name='lastName'
          control={control}
        />
        <Controller
          render={({ field, fieldState }) => {
            return (
              <TextField
                type='text'
                label='Email'
                placeholder='Enter...'
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
                type='text'
                label='Password'
                placeholder='Enter...'
                status={fieldState.error ? 'error' : undefined}
                helperText={fieldState.error?.message}
                {...field}
              />
            );
          }}
          name='password'
          control={control}
        />
        <Controller
          render={({ field, fieldState }) => {
            return (
              <TextField
                type='password'
                label='Password confirmation'
                placeholder='Enter...'
                status={fieldState.error ? 'error' : undefined}
                helperText={fieldState.error?.message}
                {...field}
              />
            );
          }}
          name='password_confirmation'
          control={control}
        />
      </Form>
    </div>
  );
};
