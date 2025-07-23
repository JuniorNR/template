import type { FC } from 'react';
import { Typography as MuiTypography } from '@mui/material';

import type { TypographyProps } from '../model/types/Typography.types';

export const Typography: FC<TypographyProps> = ({
  length,
  children,
  ...props
}) => {
  const prepareLengthText = (
    reactNode: string | React.ReactNode,
    length: TypographyProps['length'],
  ) => {
    const isNumber = typeof length === 'number';

    if (isNumber) {
      if (length === 0) return reactNode;
      if (typeof reactNode === 'string' && reactNode.length > length) {
        return `${reactNode.slice(0, length)}...`;
      }
    }
    return reactNode;
  };
  return (
    <MuiTypography {...props}>
      {prepareLengthText(children, length)}
    </MuiTypography>
  );
};
