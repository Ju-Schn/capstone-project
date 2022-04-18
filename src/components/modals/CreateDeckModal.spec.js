import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CreateDeckModal from './CreateDeckModal';

describe('CreateDeckModal', () => {
  it('renders a text and two buttons', () => {
    render(<CreateDeckModal />);
    const text = screen.getByText(
      'Du hast nicht genug Karten in den ausgewählten Kategorien.'
    );
    const changeFilterButton = screen.getByRole('button', {
      name: /ändere/i,
    });
    const createCardButton = screen.getByRole('button', {
      name: /erstelle/i,
    });
    expect(text).toBeInTheDocument();
    expect(changeFilterButton).toBeInTheDocument();
    expect(createCardButton).toBeInTheDocument();
  });

  it('calls onChangeFilterClick when clicking change Filter Button', async () => {
    const changeFilter = jest.fn();
    render(<CreateDeckModal onChangeFilterClick={changeFilter} />);

    const changeFilterButton = screen.getByRole('button', {
      name: /ändere/i,
    });

    await userEvent.click(changeFilterButton);
    expect(changeFilter).toHaveBeenCalled();
  });

  it('calls onCreateCardClick when clicking create card Button', async () => {
    const createCard = jest.fn();
    render(<CreateDeckModal onCreateCardClick={createCard} />);

    const createCardButton = screen.getByRole('button', {
      name: /erstelle/i,
    });

    await userEvent.click(createCardButton);
    expect(createCard).toHaveBeenCalled();
  });
});
