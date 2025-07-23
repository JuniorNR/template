import type { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';

export interface TypographyProps extends MuiTypographyProps {
  length?: number | 'maxPossible';
}
