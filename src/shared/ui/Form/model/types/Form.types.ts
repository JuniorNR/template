import type { ComponentPropsWithoutRef } from 'react';

import type { FieldErrors } from 'react-hook-form';

export interface FormProps extends ComponentPropsWithoutRef<'form'> {
  children: React.ReactNode | React.ReactNode[];
  title: string;
  onSubmit: (event: React.SyntheticEvent) => void;
  errors?: FieldErrors;
  loading?: boolean;
}

export type FormStatuses = 'idle' | 'success' | 'error';
