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
  changeStatusForm,
  isValid,
  titleSubmitButton,
}) => {
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
          loading={loading}
          disabled={!canHandleSubmit() || !isValid}
          onClick={(event) => {
            onSubmit(event);
            changeStatusForm(errorFieldsText.length > 0 ? 'error' : 'success');

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
            type='text'
            label='Error fields'
            editable={false}
            status={errorFieldsText.length > 0 ? 'info' : 'success'}
            disabled={errorFieldsText.length === 0}
            value={errorFieldsText.join(', ')}
            cutText
          />
        </div>
      : null}
    </div>
  );
};
