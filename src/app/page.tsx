'use client';

import { useState, type FC } from 'react';

import { RatingStar } from '@/features';

const Home: FC = () => {
  const [votes, setVotes] = useState<number[]>([5, 3, 2, 1, 4, 5, 5, 5, 5]);
  const [choice, setChoice] = useState<number>(0);

  const averageRating =
    votes.reduce((accumulator, current) => {
      return accumulator + current;
    }, 0) / votes.length;

  const onSetStar = (rate: number) => {
    setVotes((prev) => [...prev, rate]);
    setChoice(rate);
  };
  return (
    <div>
      <RatingStar
        rating={Number(averageRating.toFixed(1))}
        choices={choice}
        isEditable
        onChange={onSetStar}
      />
    </div>
  );
};

export default Home;
