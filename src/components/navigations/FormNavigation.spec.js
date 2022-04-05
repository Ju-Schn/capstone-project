import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import FormNavigation from './FormNavigation';

describe('Navigation', () => {
  it('renders three navigation buttons', () => {
    render(
      <MemoryRouter>
        <FormNavigation />
      </MemoryRouter>
    );

    const navigationLinks = screen.getAllByRole('button');
    expect(navigationLinks).toHaveLength(3);
  });
});
