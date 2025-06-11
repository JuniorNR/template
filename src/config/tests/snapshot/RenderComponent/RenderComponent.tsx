import type { ReactNode, FC } from 'react';
import { render } from '@testing-library/react';

const TestWrapper: FC<{ children: ReactNode }> = ({ children }) => (
  <div id='test-component-root'>{children}</div>
);

export const renderComponent = (component: React.ReactElement) => {
  const { container } = render(component, { wrapper: TestWrapper });
  return container.querySelector('#test-component-root')!;
};
