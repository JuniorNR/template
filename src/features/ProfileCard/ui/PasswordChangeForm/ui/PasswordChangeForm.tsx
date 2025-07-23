import type { FC } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';

import type { UserDTO } from '@/entities/types';
import { Form, TextField } from '@/shared';
import { handleFetch } from '@/shared/lib';

import { passwordChangeFormSchema } from '../model/schemas/passwordChangeForm.schema';

import type { FormValues } from '../model/schemas/passwordChangeForm.schema';

export const PasswordChangeForm: FC = () => {
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
  } = useForm<FormValues>({
    resolver: zodResolver(passwordChangeFormSchema),
    defaultValues: {
      password: '',
      confirm_password: '',
    },
    mode: 'onChange',
  });
  const onSubmit = handleSubmit((data: FormValues) => {
    handleFetch<Pick<UserDTO, 'id'> & { password: string }>(
      '/user/update-password',
      {
        method: 'POST',
        data: { id: 1, password: data.password },
      },
    );
  });
  return (
    <Form
      title='Password change'
      loading={isSubmitting}
      errors={errors}
      onSubmit={onSubmit}
    >
      <Controller
        render={({ field, fieldState }) => {
          return (
            <TextField
              type='password'
              label='Password'
              autoComplete='off'
              disabled={isSubmitting}
              placeholder='Enter password...'
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
              label='Confirm password'
              autoComplete='off'
              disabled={isSubmitting}
              placeholder='Enter password...'
              status={fieldState.error ? 'error' : undefined}
              helperText={fieldState.error?.message}
              {...field}
            />
          );
        }}
        name='confirm_password'
        control={control}
      />
    </Form>
  );
};
