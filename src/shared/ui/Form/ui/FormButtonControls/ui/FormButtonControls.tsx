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
  changeStatusForm,
}) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const holdStatusMS = 3000;
  const errorFields = Object.keys(errors || []).map((error) => {
    const capitalizedError = error.charAt(0).toUpperCase() + error.slice(1);
    let field: string | string[] = capitalizedError.split('_');
    if (field.length > 1) {
      field = field.join(' ');
    }
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
        return 'Save';
    }
  };

  return (
    <div className={classNames(styles.formButtonControls)}>
      <div className={classNames(styles.formButtons)}>
        <Button
          loading={loading}
          disabled={statusForm !== 'idle'}
          onClick={(event) => {
            onSubmit(event);
            changeStatusForm(errorFields.length > 0 ? 'error' : 'success');

            timerRef.current = setTimeout(() => {
              changeStatusForm('idle');
            }, holdStatusMS);
          }}
        >
          {renderTextButtonByStatusForm()}
        </Button>
      </div>
      <div className={classNames(styles.formInfo)}>
        <TextField
          type='text'
          label='Error fields'
          editable={false}
          status={errorFields.length > 0 ? 'info' : 'success'}
          disabled={errorFields.length === 0}
          value={errorFields.join(', ')}
        />
      </div>
    </div>
  );
};
