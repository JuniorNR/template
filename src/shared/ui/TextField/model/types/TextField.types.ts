import type { ChangeEventHandler, InputHTMLAttributes } from 'react';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'password' | 'email';
  label: string;
  autocomplete?: string;
  placeholder?: string;
  name?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  helperText?: string;
  status?: 'error' | 'success' | 'info' | 'attention' | 'default';
  editable?: boolean;
  cutText?: boolean;
}
