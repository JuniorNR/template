import { useEffect, useState, type KeyboardEvent } from 'react';

import { percentOfRating, starByPercent } from '../utils/rating.utils';

import type { Stars } from '../../model/types/RatingStar.types';

export const useStars = (
  rating: number,
  choices: number,
  isEditable: boolean,
  onChange: ((rate: number) => void) | undefined,
): [
  Stars[],
  onEnter: (hoverOrder: number) => void,
  onLeave: () => void,
  onChangeClick: (starOrder: number) => void,
  onChangeKeydown: (event: KeyboardEvent, starOrder: number) => void,
] => {
  const ratingPercent = percentOfRating(rating);

  const [stars, setStars] = useState<Stars[]>([
    {
      order: 1,
      filled: ratingPercent >= starByPercent.oneStar,
      byPercent: 20,
      text: 'Bad',
      isChoice: choices >= 1,
    },
    {
      order: 2,
      filled: ratingPercent >= starByPercent.twoStar,
      byPercent: 40,
      text: 'Poorly',
      isChoice: choices >= 2,
    },
    {
      order: 3,
      filled: ratingPercent >= starByPercent.threeStar,
      byPercent: 60,
      text: 'Insufficiently',
      isChoice: choices >= 3,
    },
    {
      order: 4,
      filled: ratingPercent >= starByPercent.fourStar,
      byPercent: 80,
      text: 'Average',
      isChoice: choices >= 4,
    },
    {
      order: 5,
      filled: ratingPercent >= starByPercent.fiveStar,
      byPercent: 100,
      text: 'Perfect',
      isChoice: choices >= 5,
    },
  ]);

  useEffect(() => {
    // live time update by rating
    setStars((prev) => {
      let shouldUpdate = false;
      const next = prev.map((item) => {
        const filled = ratingPercent >= item.byPercent;
        if (item.filled !== filled) {
          shouldUpdate = true;
          return {
            ...item,
            filled,
          };
        }
        return item;
      });
      return shouldUpdate ? next : prev;
    });
  }, [rating, ratingPercent]);

  const onEnter = (hoverOrder: number) => {
    if (!isEditable || choices !== 0) {
      return;
    }
    setStars((prev) => {
      return prev.map((item) => {
        return {
          ...item,
          filled: hoverOrder >= item.order,
        };
      });
    });
  };

  const onLeave = () => {
    if (!isEditable || choices !== 0) {
      return;
    }
    setStars((prev) => {
      return prev.map((item) => {
        return {
          ...item,
          filled: ratingPercent >= item.byPercent,
        };
      });
    });
  };

  const onSetChoice = (rate: number) => {
    if (choices !== 0 && !isEditable) {
      return;
    }

    setStars((prev) => {
      return prev.map((item) => {
        return {
          ...item,
          isChoice: rate >= item.order,
        };
      });
    });
  };

  const onChangeClick = (starOrder: number) => {
    if (onChange && choices === 0 && isEditable) {
      onChange(starOrder);
      onSetChoice(starOrder);
    }
  };

  const onChangeKeydown = (event: KeyboardEvent, starOrder: number) => {
    if (onChange && choices === 0 && event.code === 'Space' && isEditable) {
      onChange(starOrder);
      onSetChoice(starOrder);
    }
  };

  return [stars, onEnter, onLeave, onChangeClick, onChangeKeydown];
};
