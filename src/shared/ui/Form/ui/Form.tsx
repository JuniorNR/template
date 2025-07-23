'use client';
import { useState, type FC } from 'react';

import { classNames } from '@/shared/lib';

import { FormButtonControls } from './FormButtonControls';
import { FormTitle } from './FormTitle';

import styles from './Form.module.scss';

import type { FormProps } from '../model/types/Form.types';

export const Form: FC<FormProps> = ({
  children,
  title,
  onSubmit,
  loading,
  errors,
  ...props
}) => {
  const [statusForm, setStatusForm] = useState<'idle' | 'success' | 'error'>(
    'idle',
  );

  const handleChangeStatusForm = (statusForm: 'idle' | 'success' | 'error') => {
    setStatusForm(statusForm);
  };
  return (
    <form
      className={classNames(styles.form, {
        [styles.success]: statusForm === 'success',
        [styles.error]: statusForm === 'error',
      })}
      {...props}
    >
      <FormTitle
        text={title}
        loading={loading}
        statusForm={statusForm}
      />
      <div className={classNames(styles.formContent)}>{children}</div>
      <FormButtonControls
        statusForm={statusForm}
        loading={loading}
        errors={errors}
        changeStatusForm={handleChangeStatusForm}
        onSubmit={onSubmit}
      />
    </form>
  );
};
