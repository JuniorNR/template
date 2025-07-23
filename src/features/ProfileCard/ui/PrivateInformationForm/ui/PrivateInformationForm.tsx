import { zodResolver } from '@hookform/resolvers/zod';
import { type FC } from 'react';
import { useForm, Controller } from 'react-hook-form';

import type { UserDTO } from '@/entities/types';
import { Form, TextField } from '@/shared';
import { handleFetch } from '@/shared/lib';

import { privateInformationFormSchema } from '../model/schemas/PrivateInformationForm.schema';

import type { FormValues } from '../model/schemas/PrivateInformationForm.schema';

export const PrivateInformationForm: FC = () => {
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
  } = useForm<FormValues>({
    resolver: zodResolver(privateInformationFormSchema),
    defaultValues: {
      login: '',
      email: '',
    },
    mode: 'onChange',
  });

  const onSubmit = handleSubmit((dataToServer: FormValues) => {
    handleFetch<Pick<UserDTO, 'id' | 'email' | 'login'>>(
      '/user/update-private-fields',
      {
        method: 'POST',
        data: {
          id: 1,
          email: dataToServer.email,
          login: dataToServer.login,
        },
      },
    );
  });

  return (
    <Form
      title='Private information'
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
              placeholder='Enter login...'
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
              label='Email'
              placeholder='Enter email...'
              status={fieldState.error ? 'error' : undefined}
              helperText={fieldState.error?.message}
              {...field}
            />
          );
        }}
        name='email'
        control={control}
      />
    </Form>
  );
};
