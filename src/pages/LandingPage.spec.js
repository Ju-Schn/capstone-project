import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import LandingPage from './LandingPage';
import userEvent from '@testing-library/user-event';

describe('LandingPage', () => {
  it('renders four navigation buttons', () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );

    const navigationLinks = screen.getAllByRole('button');
    expect(navigationLinks).toHaveLength(4);
  });

  it('calls navigate function and changes page', async () => {
    const navigationFunctionality = jest.fn();
    render(<LandingPage onClick={navigationFunctionality} />);

    const homeButton = screen.getByRole('button', { name: /karten/i });
    const formButton = screen.getByRole('button', { name: /erstellen/i });
    const pinnedButton = screen.getByRole('button', { name: /pinnwand/i });
    const decksButton = screen.getByRole('button', { name: /stapel/i });

    await userEvent.click(homeButton);
    expect(navigationFunctionality).toHaveBeenCalledWith('/cards');
    await userEvent.click(formButton);
    expect(navigationFunctionality).toHaveBeenCalledWith('/create');
    await userEvent.click(pinnedButton);
    expect(navigationFunctionality).toHaveBeenCalledWith('/pinned');
    await userEvent.click(decksButton);
    expect(navigationFunctionality).toHaveBeenCalledWith('/decks');
  });
});
