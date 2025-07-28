'use client';
import { useState, type FC } from 'react';

import { classNames } from '@/shared/lib';

import { FormButtonControls } from './FormButtonControls';
import { FormTitle } from './FormTitle';

import styles from './Form.module.scss';

import type { FormProps, FormStatuses } from '../model/types/Form.types';

export const Form: FC<FormProps> = ({
  children,
  title,
  onSubmit,
  loading,
  errors,
  isValid,
  titleSubmitButton,
  ...props
}) => {
  const [statusForm, setStatusForm] = useState<FormStatuses>('idle');

  const handleChangeStatusForm = (statusForm: FormStatuses) => {
    setStatusForm(statusForm);
  };
  return (
    <form
      className={classNames(styles.form, {
        [styles.success]: statusForm === 'success',
        [styles.error]: statusForm === 'error',
        [styles.noValid]: statusForm === 'noValid',
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
        titleSubmitButton={titleSubmitButton}
        statusForm={statusForm}
        loading={loading}
        errors={errors}
        isValid={isValid}
        changeStatusForm={handleChangeStatusForm}
        onSubmit={onSubmit}
      />
    </form>
  );
};
