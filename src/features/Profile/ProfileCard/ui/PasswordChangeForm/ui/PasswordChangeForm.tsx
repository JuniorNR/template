import type { FC } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';

import { useUser } from '@/entities/user';
import { Form, TextField } from '@/shared';

import { passwordChangeFormSchema } from '../model/schemas/passwordChangeForm.schema';

import type { FormValues } from '../model/schemas/passwordChangeForm.schema';

export const PasswordChangeForm: FC = () => {
  const { updateUserPasswordData, isLoading } = useUser();
  const {
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    control,
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(passwordChangeFormSchema),
    defaultValues: {
      password: '',
      password_confirmation: '',
    },
    mode: 'onChange',
  });

  const onSubmit = handleSubmit((dataToServer: FormValues) => {
    updateUserPasswordData(dataToServer);
  });
  return (
    <Form
      additionalValidate={{
        passwordsDoNotMatch:
          watch('password') !== watch('password_confirmation'),
        fieldsShouldNotBeEmpty:
          watch('password') === '' || watch('password_confirmation') === '',
      }}
      title='Password change'
      blur={isLoading}
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
        name='password_confirmation'
        control={control}
      />
    </Form>
  );
};
