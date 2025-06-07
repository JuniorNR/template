'use client';
import { type FC, type KeyboardEvent } from 'react';

import { classNames } from '@/shared/lib';

import { useStars } from '../lib/hooks/useStars';

import styles from './rating.module.scss';

import type { RatingStarProps } from '../model/types/RatingStar.types';

export const RatingStar: FC<RatingStarProps> = ({
  rating,
  isEditable = false,
  choices,
  onChange,
}) => {
  const [stars, onEnter, onLeave, onSetChoice] = useStars(
    rating,
    choices,
    isEditable,
  );

  const handleChangeClick = (starOrder: number) => {
    if (onChange && choices === 0) {
      onChange(starOrder);
      onSetChoice(starOrder);
    }
  };

  const handleChangeKeydown = (event: KeyboardEvent, starOrder: number) => {
    if (onChange && choices === 0 && event.code === 'Space') {
      onChange(starOrder);
      onSetChoice(starOrder);
    }
  };

  return (
    <div
      className={classNames(styles.rating, {
        isEditable: isEditable && styles.isEditable,
      })}
      data-testid='rating'
    >
      {stars.map((star) => {
        return (
          <div
            key={star.order}
            className={classNames(styles.star, {
              filled: star.filled && styles.filled,
              choices: star.isChoice && styles.choices,
            })}
            tabIndex={isEditable ? 0 : -1}
            onMouseEnter={() => onEnter(star.order)}
            onMouseLeave={onLeave}
            onClick={() => handleChangeClick(star.order)}
            onKeyDown={(event) => handleChangeKeydown(event, star.order)}
          >
            <svg viewBox='0 0 20 20'>
              <path d='M19.9477 7.55686C19.816 7.13427 19.4568 6.83508 19.0335 6.79511L13.2601 6.24816L10.9784 0.673859C10.81 0.264321 10.4267 0 10 0C9.57337 0 9.18991 0.264321 9.02252 0.673859L6.74084 6.24816L0.966519 6.79511C0.543233 6.83587 0.184799 7.13507 0.0523506 7.55686C-0.0793348 7.97946 0.0422796 8.44298 0.362414 8.73596L4.72665 12.7293L3.43985 18.6434C3.34571 19.0782 3.50745 19.5279 3.85322 19.7887C4.03908 19.9296 4.25743 20 4.47655 20C4.66485 20 4.8533 19.9478 5.0216 19.8427L10 16.7364L14.9775 19.8427C15.3427 20.0704 15.8018 20.0495 16.1468 19.7887C16.4926 19.5279 16.6543 19.0782 16.5602 18.6434L15.2734 12.7293L19.6376 8.73596C19.9576 8.44298 20.0794 7.98041 19.9477 7.55686Z' />
            </svg>
          </div>
        );
      })}
    </div>
  );
};
