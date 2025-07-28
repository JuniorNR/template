'use client';
import { type FC } from 'react';

import { classNames } from '@/shared/lib';

import { PasswordChangeForm } from './PasswordChangeForm';
import { PrivateInformationForm } from './PrivateInformationForm';
import { PublicInformationForm } from './PublicInformationForm';

import styles from './ProfileCard.module.scss';

export const ProfileCard: FC = () => {
  return (
    <div className={classNames(styles.profileCard)}>
      <PrivateInformationForm />
      <PublicInformationForm />
      <PasswordChangeForm />
    </div>
  );
};
