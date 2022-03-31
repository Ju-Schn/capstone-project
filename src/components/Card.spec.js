import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('renders a question, an answer and a button', () => {
    render(<Card question="Whats up?" answer="Something." />);

    const question = screen.getByText('Whats up?');
    const deleteButton = screen.getByRole('button', { name: /lösche/i });
    const toggleSolutionButton = screen.getByRole('button', {
      name: /antwort/i,
    });

    expect(question).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
    expect(toggleSolutionButton).toBeInTheDocument();
  });
});
