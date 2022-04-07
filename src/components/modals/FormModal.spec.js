import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormModal from './FormModal.js';

describe('FormModal', () => {
  it('renders a text and two buttons', () => {
    render(<FormModal />);
    const text = screen.getByText(/möchtest du/i);
    const addButton = screen.getByRole('button', {
      name: /erstellen/i,
    });
    const discardButton = screen.getByRole('button', {
      name: /weiter/i,
    });
    expect(text).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
    expect(discardButton).toBeInTheDocument();
  });

  it('calls the onAddCard function on click of button to add a new card', async () => {
    const addFunctionality = jest.fn();
    render(<FormModal onAddNewCard={addFunctionality} />);

    const addButton = screen.getByRole('button', {
      name: /erstellen/i,
    });

    await userEvent.click(addButton);
    expect(addFunctionality).toHaveBeenCalled();
  });

  it('calls the onDiscard function on click of button to discard input and change the page', async () => {
    const discardFunctionality = jest.fn();
    render(<FormModal onDiscard={discardFunctionality} />);

    const discardButton = screen.getByRole('button', {
      name: /weiter/i,
    });

    await userEvent.click(discardButton);
    expect(discardFunctionality).toHaveBeenCalled();
  });
});
