import type { FC } from 'react';

import { classNames } from '@/helpers';

import { Loader } from '../../Loader';
import { ButtonStatuses } from '../model/utils/Button.utils';

import styles from './Button.module.scss';

import type { ButtonProps } from '../model/types/Button.types';

export const Button: FC<ButtonProps> = ({
  children,
  status,
  iconStart,
  iconEnd,
  loading = false,
  fullWidth = false,
  disabled,
  onClick,
  ...props
}) => {
  const preparedStylesByProps = {
    [styles.error]: status === ButtonStatuses.ERROR,
    [styles.success]: status === ButtonStatuses.SUCCESS,
    [styles.info]: status === ButtonStatuses.INFO,
    [styles.attention]: status === ButtonStatuses.ATTENTION,
    [styles.fullWidth]: fullWidth,
  };
  const renderIconEndOrLoading = () => {
    if (loading) {
      return <Loader />;
    }

    if (iconEnd) {
      return iconEnd;
    }
  };

  return (
    <button
      className={classNames(styles.button, { ...preparedStylesByProps })}
      data-testid='button'
      tabIndex={0}
      type='button'
      disabled={disabled || loading}
      onClick={(event) => {
        event.preventDefault();
        onClick?.(event);
      }}
      {...props}
    >
      {iconStart ?? null}
      {children}
      {renderIconEndOrLoading()}
    </button>
  );
};
