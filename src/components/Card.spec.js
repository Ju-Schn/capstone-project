import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('renders a question, an answer and a button', () => {
    render(<Card question="Whats up?" answer="Something." />);

    const question = screen.getByText('Whats up?');
    const answer = screen.getByText('Something.');
    const deleteButton = screen.getByRole('button', { name: /lösche/i });

    expect(question).toBeInTheDocument();
    expect(answer).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
  });
});
