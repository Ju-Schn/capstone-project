import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import FormNavigation from './FormNavigation';
import userEvent from '@testing-library/user-event';

describe('Navigation', () => {
  it('renders four navigation buttons', () => {
    render(
      <MemoryRouter>
        <FormNavigation />
      </MemoryRouter>
    );

    const navigationLinks = screen.getAllByRole('button');
    expect(navigationLinks).toHaveLength(4);
  });
  it('calls onNavClick function and changes page', async () => {
    const onNavClickFunctionality = jest.fn();
    render(<FormNavigation onNavClick={onNavClickFunctionality} />);

    const homeButton = screen.getByRole('button', { name: /karten/i });
    const formButton = screen.getByRole('button', { name: /erstellen/i });
    const pinnedButton = screen.getByRole('button', { name: /pinnwand/i });

    await userEvent.click(homeButton);
    expect(onNavClickFunctionality).toHaveBeenCalledWith('/');
    await userEvent.click(formButton);
    expect(onNavClickFunctionality).toHaveBeenCalledWith('/create-card');
    await userEvent.click(pinnedButton);
    expect(onNavClickFunctionality).toHaveBeenCalledWith('/pinned');
  });
});
