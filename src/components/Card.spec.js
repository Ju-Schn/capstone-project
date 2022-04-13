import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('renders a question, an answer, categories and 7 Buttons', () => {
    render(
      <MemoryRouter>
        <Card question="Whats up?" categories={[1, 2, 3]} />
      </MemoryRouter>
    );

    const question = screen.getByText('Whats up?');
    const category1 = screen.getAllByText(/1/i);
    const category2 = screen.getAllByText(/2/i);
    const category3 = screen.getAllByText(/3/i);
    const deleteButton = screen.getAllByRole('button', { name: /lösche/i });
    const flipCardButton = screen.getAllByRole('button', {
      name: /antwort/i,
    });
    const pinButton = screen.getByRole('button', { name: /pinne/i });
    const rightButton = screen.getByRole('button', { name: /richtig/i });
    const wrongButton = screen.getByRole('button', { name: /falsch/i });

    expect(question).toBeInTheDocument();
    expect(category1).toHaveLength(2);
    expect(category2).toHaveLength(2);
    expect(category3).toHaveLength(2);
    expect(deleteButton).toHaveLength(2);
    expect(flipCardButton).toHaveLength(2);
    expect(pinButton).toBeInTheDocument();
    expect(rightButton).toBeInTheDocument();
    expect(wrongButton).toBeInTheDocument();
  });

  it('calls onTrashClick when clicking "Trashcan"', async () => {
    const callback = jest.fn();
    render(
      <Card
        onTrashClick={callback}
        question="Do you like testing?"
        answer="Yes, of course"
        categories={[1, 2, 3]}
      />
    );

    const trashButton1 = screen.getAllByRole('button', { name: /lösche/i });
    await userEvent.click(trashButton1[0]);
    const trashButton2 = screen.getAllByRole('button', { name: /lösche/i });
    await userEvent.click(trashButton2[1]);

    expect(callback).toHaveBeenCalled();
  });
});
