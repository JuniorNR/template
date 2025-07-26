import type { FC } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';

import type { UserDTO } from '@/entities/types';
import { Form, TextField } from '@/shared';
import { handleFetch } from '@/shared/lib';

import { publicInformationFormSchema } from '../model/schemas/PublicInformationForm.schema';

import type { FormValues } from '../model/schemas/PublicInformationForm.schema';

export const PublicInformationForm: FC = () => {
  const {
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    control,
  } = useForm<FormValues>({
    resolver: zodResolver(publicInformationFormSchema),
    defaultValues: {
      firstName: '',
      middleName: '',
      lastName: '',
    },
    mode: 'onChange',
  });

  const onSubmit = handleSubmit((data: FormValues) => {
    handleFetch<
      Pick<UserDTO, 'id' | 'first_name' | 'last_name' | 'middle_name'>
    >('/user/update-public-fields', {
      method: 'PATCH',
      data: {
        id: 1,
        first_name: data.firstName,
        middle_name: data.middleName,
        last_name: data.lastName,
      },
    });
  });
  return (
    <Form
      title='Public information'
      loading={isSubmitting}
      errors={errors}
      isValid={isValid}
      onSubmit={onSubmit}
    >
      <Controller
        render={({ field, fieldState }) => {
          return (
            <TextField
              type='text'
              label='First name'
              placeholder='Enter first name...'
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
              placeholder='Enter middle name...'
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
              placeholder='Enter last name...'
              status={fieldState.error ? 'error' : undefined}
              helperText={fieldState.error?.message}
              {...field}
            />
          );
        }}
        name='lastName'
        control={control}
      />
    </Form>
  );
};
