import type { ButtonProps as MuiButtonProps } from '@mui/material/Button';

type ButtonPropsAccepted =
  | 'variant'
  | 'title'
  | 'disabled'
  | 'children'
  | 'onClick';

export interface ButtonProps extends Pick<MuiButtonProps, ButtonPropsAccepted> {
  additionalClasses?: 'primary' | 'secondary';
}
