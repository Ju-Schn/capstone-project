import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DeleteModal from './DeleteModal.js';

describe('DeleteModal', () => {
  it('renders a text and two buttons', () => {
    render(<DeleteModal />);
    const text = screen.getByText('Möchtest du die Karte wirklich löschen?');
    const keepButton = screen.getByRole('button', {
      name: /behalten/i,
    });
    const deleteButton = screen.getByRole('button', {
      name: /löschen/i,
    });
    expect(text).toBeInTheDocument();
    expect(keepButton).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
  });

  it('when clicking delete, the current card will be deleted', async () => {
    const deleteFunctionality = jest.fn();
    render(<DeleteModal onDeleteConfirm={deleteFunctionality} />);

    const deleteButton = screen.getByRole('button', {
      name: /löschen/i,
    });

    await userEvent.click(deleteButton);
    expect(deleteFunctionality).toHaveBeenCalled();
  });

  it('when clicking keep the current card will be kept', () => {
    const keepFunctionality = jest.fn();
    render(<DeleteModal onKeepConfirm={keepFunctionality} />);

    const keepButton = screen.getByRole('button', {
      name: /behalten/i,
    });

    fireEvent.click(keepButton);
    expect(keepFunctionality).toHaveBeenCalled();
  });
});
