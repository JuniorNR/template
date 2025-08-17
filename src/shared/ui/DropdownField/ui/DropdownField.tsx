'use client';

import type { FocusEvent, FC, KeyboardEvent } from 'react';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { useState } from 'react';

import { classNames } from '@/shared/lib';

import { renderStatusIcons } from '../../TextField/model/utils/TextFiled.utils';
import { Typography } from '../../Typography';

import styles from './dropdownField.module.scss';

import type { DropdownFieldProps } from '../model/types/dropdownField.types';

export const DropdownField: FC<DropdownFieldProps> = ({
  label,
  options,
  value,
  status = 'idle',
  disabled = false,
  onChange,
  cutText = false,
}) => {
  const [focused, setFocused] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const stylesByStatus = {
    [styles.error]: status === 'error',
    [styles.success]: status === 'success',
    [styles.info]: status === 'info',
    [styles.attention]: status === 'attention',
    [styles.disabled]: disabled,
  };

  const foundLabelByValue = options.find(
    (option) => option.value === value,
  )?.label;

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChange = (value: string) => {
    onChange(value);
    setIsOpen(false);
  };

  const handleFocus = (isFocused: boolean) => {
    setFocused(isFocused);
  };

  const handleOpenByKeypress = (event: KeyboardEvent<HTMLDivElement>) => {
    if (focused && !isOpen && event.key === 'Enter') {
      setIsOpen((prev) => !prev);
      return;
    }
  };

  const selectByKeypress = (
    event: KeyboardEvent<HTMLLIElement>,
    value: string,
  ) => {
    if (event.key === 'Enter') {
      handleChange(value);
    }
  };

  return (
    <div
      className={classNames(styles.dropdownField, {
        [styles.focused]: focused,
      })}
      onClick={handleOpen}
      onFocus={() => handleFocus(true)}
      onBlur={() => handleFocus(false)}
      onKeyDown={handleOpenByKeypress}
    >
      <div className={styles.dropdownFieldInfo}>
        <label
          id='dropdown-field-label'
          className={classNames(styles.label, { ...stylesByStatus })}
          tabIndex={-1}
        >
          <Typography variant='h3'>{label}</Typography>
          <div className={classNames(styles.statusIcons)}>
            {renderStatusIcons({ status, editable: true, disabled })}
          </div>
        </label>
      </div>
      <div className={styles.dropdownFieldContent}>
        <div
          className={styles.dropdownFieldContentValue}
          role='button'
          aria-haspopup='listbox'
          aria-expanded={isOpen}
          aria-controls='dropdown-field-options'
          aria-labelledby='dropdown-field-label'
          aria-disabled={disabled || undefined}
          onKeyDown={disabled ? undefined : handleOpenByKeypress}
          onFocus={() => handleFocus(true)}
          onBlur={() => handleFocus(false)}
        >
          <Typography>{foundLabelByValue || value}</Typography>
          <ArrowBackIosNewOutlinedIcon
            className={classNames(styles.dropdownFieldContentValueIcon, {
              [styles.rotate]: isOpen,
            })}
            aria-hidden='true'
          />
        </div>
        <ul
          className={classNames(styles.dropdownFieldContentOptions, {
            [styles.open]: isOpen,
            [styles.cutText]: cutText,
          })}
          id='dropdown-field-options'
          role='listbox'
          aria-labelledby='dropdown-field-label'
        >
          {options.map((option) => (
            <li
              key={option.value}
              className={styles.dropdownFieldContentOptionsItem}
              tabIndex={isOpen ? 0 : -1}
              role='option'
              aria-selected={option.value === value}
              onClick={(event) => {
                event.stopPropagation();
                handleChange(option.value);
              }}
              onKeyDown={(event) => selectByKeypress(event, option.value)}
            >
              <Typography>{option.label}</Typography>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
