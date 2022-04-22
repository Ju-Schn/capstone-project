import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import LandingPage from './LandingPage';

describe('LandingPage', () => {
  it('renders four navigation links', () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );

    const navigationLinks = screen.getAllByRole('link');
    expect(navigationLinks).toHaveLength(4);
  });
});
