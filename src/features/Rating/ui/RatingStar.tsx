'use client';
import { useState, type FC } from 'react';

import { classNames } from '@/shared/lib';

import styles from './rating.module.scss';

import type { RatingStarProps, Stars } from '../model/types/RatingStar.types';

export const RatingStar: FC<RatingStarProps> = ({ rating }) => {
  const percentOfRating = (rating / 5) * 100;

  const starByPercent: Record<string, number> = {
    oneStar: 20,
    twoStar: 40,
    threeStar: 60,
    fourStar: 80,
    fiveStar: 100,
  };

  const [stars, setStars] = useState<Stars[]>([
    {
      order: 1,
      filled: percentOfRating >= starByPercent.oneStar,
      byPercent: 20,
      text: 'Bad',
    },
    {
      order: 2,
      filled: percentOfRating >= starByPercent.twoStar,
      byPercent: 40,
      text: 'Poorly',
    },
    {
      order: 3,
      filled: percentOfRating >= starByPercent.threeStar,
      byPercent: 60,
      text: 'Insufficiently',
    },
    {
      order: 4,
      filled: percentOfRating >= starByPercent.fourStar,
      byPercent: 80,
      text: 'Average',
    },
    {
      order: 5,
      filled: percentOfRating >= starByPercent.fiveStar,
      byPercent: 100,
      text: 'Perfect',
    },
  ]);

  const handleMouseEnterOnStar = (hoverOrder: number) => {
    setStars((prev) => {
      return prev.map((item) => {
        if (hoverOrder >= item.order) {
          return {
            ...item,
            filled: true,
          };
        }
        return item;
      });
    });
  };

  const handleMouseLeaveOnStar = () => {
    setStars((prev) => {
      return prev.map((item) => {
        if (percentOfRating >= item.byPercent) {
          return {
            ...item,
            filled: true,
          };
        }
        return {
          ...item,
          filled: false,
        };
      });
    });
  };

  return (
    <div className={classNames(styles.rating)}>
      {stars.map((star) => {
        return (
          <div
            key={star.order}
            className={classNames(styles.star, {
              filled: star.filled && styles.filled,
            })}
            onMouseEnter={() => handleMouseEnterOnStar(star.order)}
            onMouseLeave={handleMouseLeaveOnStar}
          >
            <svg viewBox='0 0 24 24'>
              <path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
            </svg>
          </div>
        );
      })}
    </div>
  );
};
