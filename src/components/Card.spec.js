import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('renders a question and an answer', () => {
    render(<Card questionText="Whats up?" answerText="Something." />);

    const questionText = screen.getByText(/whats up/i);
    const answerText = screen.getByText(/something/i);

    expect(questionText).toBeInTheDocument();
    expect(answerText).toBeInTheDocument();
  });
});
