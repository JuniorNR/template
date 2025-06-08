import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { useState } from 'react';

import { classNames } from '@/shared/lib';

import { RatingStar } from './RatingStar';

import styles from './rating.module.scss';

describe('RatingStar component', () => {
  const TestComponent = () => {
    const [votes, setVotes] = useState<number[]>([
      3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5,
    ]);
    const [choice, setChoice] = useState<number>(0);

    const onSetStar = (rate: number) => {
      setVotes((prev) => [...prev, rate]);
      setChoice(rate);
    };

    const averageRating =
      votes.reduce((accumulator, current) => {
        return accumulator + current;
      }, 0) / votes.length;

    return (
      <RatingStar
        rating={Number(averageRating.toFixed(1))}
        choices={choice}
        isEditable
        onChange={onSetStar}
      />
    );
  };

  test('should render', () => {
    render(
      <RatingStar
        rating={5}
        choices={0}
      />,
    );

    const component = screen.getByTestId('rating');
    expect(component).toBeInTheDocument();
  });

  test('set focuses of all by star', async () => {
    render(<TestComponent />);

    const user = userEvent.setup();
    const component = screen.getByTestId('rating');
    const star1 = screen.getByTestId('rating-star1');
    const star2 = screen.getByTestId('rating-star2');
    const star3 = screen.getByTestId('rating-star3');
    const star4 = screen.getByTestId('rating-star4');
    const star5 = screen.getByTestId('rating-star5');

    await user.tab();
    expect(star1).toHaveFocus();
    await user.tab();
    expect(star2).toHaveFocus();
    await user.tab();
    expect(star3).toHaveFocus();
    await user.tab();
    expect(star4).toHaveFocus();
    await user.tab();
    expect(star5).toHaveFocus();
  });

  test('set four stars by key press "space" on five star', async () => {
    render(<TestComponent />);

    const user = userEvent.setup();
    const star1 = screen.getByTestId('rating-star1');
    const star2 = screen.getByTestId('rating-star2');
    const star3 = screen.getByTestId('rating-star3');
    const star4 = screen.getByTestId('rating-star4');
    const star5 = screen.getByTestId('rating-star5');

    await user.tab();
    await user.tab();
    await user.tab();
    await user.tab();
    await user.tab();
    await user.keyboard(' ');
    for (const star of [star1, star2, star3, star4]) {
      expect(star).toHaveClass(
        classNames(styles.star, {}, [styles.filled, styles.choices]),
      );
    }
    expect(star5).toHaveFocus();
    expect(star5).not.toHaveClass(styles.filled);
  });
});
