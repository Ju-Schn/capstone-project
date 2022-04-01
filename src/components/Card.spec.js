import { userEvent } from '@storybook/testing-library';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('renders a question, and three buttons', () => {
    render(<Card question="Whats up?" />);

    const question = screen.getByText('Whats up?');
    const deleteButton = screen.getByRole('button', { name: /lösche/i });
    const toggleSolutionButton = screen.getByRole('button', {
      name: /antwort/i,
    });
    const togglePinnedButton = screen.getByRole('button', {
      name: /pinne/i,
    });

    expect(question).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
    expect(toggleSolutionButton).toBeInTheDocument();
    expect(togglePinnedButton).toBeInTheDocument();
  });

  it('calls onTrashClick when clicking "Trashcan"', () => {
    const callback = jest.fn();
    render(
      <Card
        onTrashClick={callback}
        question="Do you like testing?"
        answer="Yes, of course"
      />
    );

    const trashButton = screen.getByRole('button', { name: /lösche/i });
    userEvent.click(trashButton);

    expect(callback).toHaveBeenCalled();
  });
});
