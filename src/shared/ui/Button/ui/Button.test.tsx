import { render, screen, fireEvent } from '@testing-library/react';

import { Button } from './Button';

describe('Button component', () => {
  it('should render', () => {
    render(<Button>Button</Button>);
    const button = screen.getByTestId('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Button');
  });
  it('should call onClick', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);

    fireEvent.click(screen.getByTestId('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
