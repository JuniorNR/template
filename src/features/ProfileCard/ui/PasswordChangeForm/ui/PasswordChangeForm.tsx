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
    formState: { errors, isSubmitting, isValid },
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
        method: 'PATCH',
        data: { id: 1, password: data.password },
      },
    );
  });
  return (
    <Form
      title='Password change'
      loading={isSubmitting}
      errors={errors}
      isValid={isValid}
      onSubmit={onSubmit}
    >
      <Controller
        render={({ field, fieldState }) => {
          return (
            <TextField
              autoComplete='new-password'
              type='password'
              label='Password'
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
              autoComplete='new-password'
              type='password'
              label='Confirm password'
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
