import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { BreadCrumbs } from '@/widgets';

describe('BreadCrumbs', () => {
  it('should render', () => {
    render(<BreadCrumbs />);

    const breadCrumbs = screen.getByTestId('breadcrumbs');

    expect(breadCrumbs).toBeInTheDocument();
  });

  // it('should change focus by tab', async () => { TODO: fix this test
  //   render(<BreadCrumbs />);
  //   const user = userEvent.setup();

  //   const breadCrumbsList = [];

  //   for (let i = 0; i < 3; i++) {
  //     breadCrumbsList.push(screen.getByTestId(`breadcrumbs-item-${i}`));
  //   }

  //   for (const breadCrumb of breadCrumbsList) {
  //     await user.tab(breadCrumb);
  //     expect(breadCrumb).toHaveFocus();
  //     expect(breadCrumb).toHaveAttribute(
  //       'href',
  //       breadCrumb.getAttribute('href'),
  //     );
  //   }

  //   expect(3).toBe(breadCrumbsList.length);
  // });
});
