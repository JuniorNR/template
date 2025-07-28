'use client';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useRef, useState, type FC } from 'react';

import { classNames } from '@/shared/lib';

import {
  renderStatusIcons,
  TextFieldStatuses,
} from '../model/utils/TextFiled.utils';

import styles from './TextField.module.scss';

import type { TextFieldProps } from '../model/types/TextField.types';

export const TextField: FC<TextFieldProps> = ({
  label,
  name,
  placeholder = 'Enter...',
  onChange,
  value = '',
  helperText,
  status = TextFieldStatuses.DEFAULT,
  type,
  autocomplete,
  disabled = false,
  editable = true,
  cutText = false,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [focused, setFocused] = useState<boolean>(false);
  const [passwordShow, setPasswordShow] = useState<boolean>(false);
  const stylesByStatus = {
    [styles.error]: status === TextFieldStatuses.ERROR,
    [styles.success]: status === TextFieldStatuses.SUCCESS,
    [styles.info]: status === TextFieldStatuses.INFO,
    [styles.attention]: status === TextFieldStatuses.ATTENTION,
    [styles.disabled]: disabled,
  };

  const handleFocusToInput = (): void => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const renderInputByType = (
    type: TextFieldProps['type'],
    editable: boolean,
  ): React.ReactNode => {
    if (editable) {
      if (type === 'text' || type === 'email') {
        return (
          <input
            ref={inputRef}
            className={classNames(styles.input, {
              [styles.error]: status === TextFieldStatuses.ERROR,
              [styles.success]: status === TextFieldStatuses.SUCCESS,
              [styles.info]: status === TextFieldStatuses.INFO,
            })}
            autoComplete={autocomplete}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            tabIndex={0}
            disabled={disabled}
            onChange={onChange}
          />
        );
      }
      if (type === 'password') {
        return (
          <div className={classNames(styles.inputPasswordWrapper)}>
            <input
              ref={inputRef}
              className={classNames(styles.input, { ...stylesByStatus })}
              autoComplete={autocomplete}
              type={passwordShow ? 'text' : type}
              placeholder={placeholder}
              value={value}
              tabIndex={0}
              disabled={disabled}
              onChange={onChange}
            />
            <div>
              {passwordShow ?
                <VisibilityIcon onClick={() => setPasswordShow(false)} />
              : <VisibilityOffIcon onClick={() => setPasswordShow(true)} />}
            </div>
          </div>
        );
      }
    }
    return (
      <div
        className={classNames(styles.input, {
          [styles.error]: status === TextFieldStatuses.ERROR,
          [styles.success]: status === TextFieldStatuses.SUCCESS,
          [styles.info]: status === TextFieldStatuses.INFO,
          [styles.cutText]: cutText,
        })}
        tabIndex={0}
      >
        {value}
      </div>
    );
  };

  return (
    <div
      className={classNames(styles.textField, {
        [styles.focused]: focused,
        ...stylesByStatus,
      })}
      onFocus={() => {
        if (editable) {
          handleFocusToInput();
          setFocused(true);
        }
      }}
      onBlur={() => setFocused(false)}
    >
      <div className={classNames(styles.textFieldInfo)}>
        <label className={classNames(styles.label, { ...stylesByStatus })}>
          {label}
          <div className={classNames(styles.statusIcons)}>
            {renderStatusIcons({ status, editable, disabled })}
          </div>
        </label>
        <span className={classNames(styles.helperText, { ...stylesByStatus })}>
          {helperText}
        </span>
      </div>
      {renderInputByType(type, editable)}
    </div>
  );
};
