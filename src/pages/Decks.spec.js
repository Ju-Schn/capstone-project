import Decks from './Decks';

import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

describe('Decks', () => {
  it('renders 6 buttons', () => {
    render(
      <MemoryRouter>
        <Decks />
      </MemoryRouter>
    );
    const allButtons = screen.getAllByRole('button');
    const resetFilterButtons = screen.getAllByRole('button', { name: 'Alle' });
    const easyButton = screen.getByRole('button', { name: 'Leicht' });
    const mediumButton = screen.getByRole('button', { name: 'Mittel' });
    const difficultButton = screen.getByRole('button', { name: 'Schwer' });
    const createButton = screen.getByRole('button', { name: 'Erstellen' });

    expect(allButtons).toHaveLength(6);
    expect(resetFilterButtons).toHaveLength(2);
    expect(easyButton).toBeInTheDocument();
    expect(mediumButton).toBeInTheDocument();
    expect(difficultButton).toBeInTheDocument();
    expect(createButton).toBeInTheDocument();
  });
});
