import type { ButtonHTMLAttributes } from 'react';

import type { ButtonStatuses } from '../utils/Button.utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
  status?: ButtonStatuses;
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
  fullWidth?: boolean;
}
