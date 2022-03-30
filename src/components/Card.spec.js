import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('renders a question and an answer', () => {
    render(<Card question="Whats up?" answer="Something." />);

    const question = screen.getByText('Whats up?');
    const answer = screen.getByText('Something.');

    expect(question).toBeInTheDocument();
    expect(answer).toBeInTheDocument();
  });
});
