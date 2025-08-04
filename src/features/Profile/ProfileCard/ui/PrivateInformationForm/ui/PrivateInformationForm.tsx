import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, type FC } from 'react';
import { useForm, Controller } from 'react-hook-form';

import type { UserDTO } from '@/entities/types';
import { useUser } from '@/entities/user';
import { Form, TextField } from '@/shared';
import { handleFetch } from '@/shared/lib';

import { privateInformationFormSchema } from '../model/schemas/PrivateInformationForm.schema';

import type { FormValues } from '../model/schemas/PrivateInformationForm.schema';

export const PrivateInformationForm: FC = () => {
  const {
    user,
    isLoading,
    // error,
    updateUserPrivateFieldsData,
  } = useUser();

  const {
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    control,
    reset,
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(privateInformationFormSchema),
    defaultValues: {
      login: user?.login ?? '',
      email: user?.email ?? '',
    },
    mode: 'onChange',
  });

  useEffect(() => {
    if (user) {
      reset({
        login: user.login,
        email: user.email,
      });
    }
  }, [user, reset]);

  const onSubmit = handleSubmit((dataToServer: FormValues) => {
    updateUserPrivateFieldsData(dataToServer);
  });

  const watchedFields = watch();

  return (
    <Form
      additionalValidate={{
        atLeastOneFieldMustBeChanged:
          watchedFields.email === user?.email &&
          watchedFields.login === user?.login,
      }}
      title='Private information'
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
