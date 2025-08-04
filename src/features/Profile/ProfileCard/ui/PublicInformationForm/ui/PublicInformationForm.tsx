/* eslint-disable complexity */
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, type FC } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { useUser } from '@/entities/user';
import { Form, TextField } from '@/shared';

import { publicInformationFormSchema } from '../model/schemas/PublicInformationForm.schema';

import type { FormValues } from '../model/schemas/PublicInformationForm.schema';

export const PublicInformationForm: FC = () => {
  const { user, isLoading, updateUserPublicFieldsData } = useUser();

  const {
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    control,
    watch,
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(publicInformationFormSchema),
    defaultValues: {
      firstName: user?.firstName ?? '',
      middleName: user?.middleName ?? '',
      lastName: user?.lastName ?? '',
    },
    mode: 'onChange',
  });

  useEffect(() => {
    if (user) {
      reset({
        firstName: user.firstName,
        middleName: user.middleName,
        lastName: user.lastName,
      });
    }
  }, [user, reset]);

  const onSubmit = handleSubmit((dataToServer: FormValues) => {
    updateUserPublicFieldsData(dataToServer);
  });
  return (
    <Form
      additionalValidate={{
        atLeastOneFieldMustBeChanged:
          watch('firstName') === user?.firstName &&
          watch('middleName') === user?.middleName &&
          watch('lastName') === user?.lastName,
      }}
      title='Public information'
      loading={isSubmitting}
      errors={errors}
      isValid={isValid}
      blur={isLoading}
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
