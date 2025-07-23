import type { FC } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';

import { Form, TextField } from '@/shared';

import { publicInformationFormSchema } from '../model/schemas/PublicInformationForm.schema';

import type { FormValues } from '../model/schemas/PublicInformationForm.schema';

export const PublicInformationForm: FC = () => {
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
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
    console.debug(data, 'data');
  });
  return (
    <Form
      title='Public information'
      loading={isSubmitting}
      errors={errors}
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
