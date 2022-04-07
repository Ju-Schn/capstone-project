import { userEvent } from '@storybook/testing-library';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('renders a question, category and two buttons', () => {
    render(<Card question="Whats up?" categories={[1, 2, 3]} />);

    const question = screen.getByText('Whats up?');
    const category1 = screen.getByText(/1/i);
    const category2 = screen.getByText(/2/i);
    const category3 = screen.getByText(/3/i);
    const deleteButton = screen.getByRole('button', { name: /lösche/i });
    const toggleSolutionButton = screen.getByRole('button', {
      name: /antwort/i,
    });

    expect(question).toBeInTheDocument();
    expect(category1).toBeInTheDocument();
    expect(category2).toBeInTheDocument();
    expect(category3).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
    expect(toggleSolutionButton).toBeInTheDocument();
  });

  it('calls onTrashClick when clicking "Trashcan"', () => {
    const callback = jest.fn();
    render(
      <Card
        onTrashClick={callback}
        question="Do you like testing?"
        answer="Yes, of course"
        categories={[1, 2, 3]}
      />
    );

    const trashButton = screen.getByRole('button', { name: /lösche/i });
    userEvent.click(trashButton);

    expect(callback).toHaveBeenCalled();
  });
});
