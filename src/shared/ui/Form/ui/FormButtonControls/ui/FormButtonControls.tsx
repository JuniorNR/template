import { useEffect, useRef, type FC } from 'react';

import { Button, TextField } from '@/shared';
import { classNames } from '@/shared/lib';

import styles from './FormButtonControls.module.scss';

import type { FormButtonControlsProps } from '../model/types/FormButtonControls.types';

export const FormButtonControls: FC<FormButtonControlsProps> = ({
  onSubmit,
  loading,
  errors,
  statusForm,
  errorFields,
  additionalValidatingFields,
  changeStatusForm,
  isValid,
  titleSubmitButton,
}) => {
  const additionalValidatingNotEmpty =
    additionalValidatingFields[0]?.length > 0;
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const holdStatusMS = 3000;

  const errorFieldsText = Object.keys(errors || []).map((error) => {
    let field = '';
    const splittedField: string | string[] = error
      .split(/[_]+|(?=[A-Z])/) // split by underscore or capital letter
      .filter(Boolean);
    const capitalizedField = splittedField.map((item) => {
      return item[0].toUpperCase() + item.slice(1);
    });

    field = capitalizedField.join(' ');
    return field;
  });

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const renderTextButtonByStatusForm = () => {
    switch (statusForm) {
      case 'success':
        return 'Saved';
      case 'error':
        return 'Error';
      default:
        return titleSubmitButton || 'Submit';
    }
  };

  const canHandleSubmit = () => {
    switch (statusForm) {
      case 'idle':
        return true;
      case 'success':
        return false;
      case 'error':
        return false;
      default:
        return false;
    }
  };

  return (
    <div className={classNames(styles.formButtonControls)}>
      <div className={classNames(styles.formButtons)}>
        <Button
          status={statusForm}
          loading={loading}
          onClick={(event) => {
            if (
              canHandleSubmit() &&
              isValid &&
              additionalValidatingFields.length === 0
            ) {
              onSubmit(event);
              changeStatusForm(
                errorFieldsText.length > 0 ? 'error' : 'success',
              );
            }
            timerRef.current = setTimeout(() => {
              changeStatusForm('idle');
            }, holdStatusMS);
          }}
        >
          {renderTextButtonByStatusForm()}
        </Button>
      </div>
      {errorFields ?
        <div className={classNames(styles.formInfo)}>
          <TextField
            value={
              errorFieldsText.join(', ') ||
              additionalValidatingFields.join(', ')
            }
            status={
              errorFieldsText.length > 0 || additionalValidatingNotEmpty ?
                'info'
              : 'success'
            }
            type='text'
            label='Error fields'
            editable={false}
            disabled={errorFieldsText.length === 0}
            cutText
          />
        </div>
      : null}
    </div>
  );
};
