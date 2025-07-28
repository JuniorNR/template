import type { ComponentPropsWithoutRef } from 'react';

import type { FieldErrors } from 'react-hook-form';

export interface FormProps extends ComponentPropsWithoutRef<'form'> {
  children: React.ReactNode | React.ReactNode[];
  title: string;
  onSubmit: (event: React.SyntheticEvent) => void;
  errorFields?: boolean;
  titleSubmitButton?: string;
  errors?: FieldErrors;
  loading?: boolean;
  isValid?: boolean;
}

export type FormStatuses = 'idle' | 'success' | 'error' | 'noValid';
