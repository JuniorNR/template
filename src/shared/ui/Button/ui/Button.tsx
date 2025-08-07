import type { FC } from 'react';

import { classNames } from '@/helpers';

import { Loader } from '../../Loader';

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
    [styles.error]: status === 'error',
    [styles.success]: status === 'success',
    [styles.info]: status === 'info',
    [styles.attention]: status === 'attention',
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
