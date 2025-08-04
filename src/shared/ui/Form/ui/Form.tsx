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
  additionalValidate,
  blur = false,
  errorFields = true,
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

  const additionalValidatingFields = Object.entries(additionalValidate || {})
    .map((error) => {
      if (error[1]) {
        let field = '';

        const splittedField: string | string[] = error[0]
          .split(/[_]+|(?=[A-Z])/) // split by underscore or capital letter
          .filter(Boolean);
        const capitalizedField = splittedField.map((item) => {
          return item[0].toUpperCase() + item.slice(1);
        });

        field = capitalizedField.join(' ');
        return field;
      }
      return null;
    })
    .filter((field): field is string => field !== null); // Убираем null значения и типизируем

  return (
    <form
      className={classNames(styles.form, {
        [styles.success]: statusForm === 'success',
        [styles.error]: statusForm === 'error',
        [styles.noValid]: statusForm === 'noValid',
        [styles.blur]: blur,
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
        additionalValidatingFields={additionalValidatingFields}
        errorFields={errorFields}
        errors={errors}
        isValid={isValid}
        changeStatusForm={handleChangeStatusForm}
        onSubmit={onSubmit}
      />
    </form>
  );
};
