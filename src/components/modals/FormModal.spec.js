import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormModal from './FormModal.js';

describe('FormModal', () => {
  it('renders a text and two buttons', () => {
    render(<FormModal showModal={true} />);
    const text = screen.getByText(/möchtest du/i);
    const keepButton = screen.getByRole('button', {
      name: /erstellen/i,
    });
    const deleteButton = screen.getByRole('button', {
      name: /weiter/i,
    });
    expect(text).toBeInTheDocument();
    expect(keepButton).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
  });

  it('when clicking add, the current input will be added to a new card', async () => {
    const addFunctionality = jest.fn();
    render(<FormModal showModal={true} onAddCard={addFunctionality} />);

    const addButton = screen.getByRole('button', {
      name: /erstellen/i,
    });

    await userEvent.click(addButton);
    expect(addFunctionality).toHaveBeenCalled();
  });

  it('when clicking goOn the current input will be deleted and the page will be changed', () => {
    const goOnFunctionality = jest.fn();
    render(<FormModal showModal={true} onGoOn={goOnFunctionality} />);

    const goOnButton = screen.getByRole('button', {
      name: /weiter/i,
    });

    fireEvent.click(goOnButton);
    expect(goOnFunctionality).toHaveBeenCalled();
  });
});
