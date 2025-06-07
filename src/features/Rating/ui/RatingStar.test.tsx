import { render, screen } from '@testing-library/react';

import { RatingStar } from './RatingStar';

describe('RatingStar component', () => {
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
});
