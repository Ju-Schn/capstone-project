import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CreateCard from './CreateCard';

describe('CreateCard', () => {
  it('does not submit when one of the repuired inputs is empty or only whitespace', () => {
    const neverCalled = jest.fn();
    render(<CreateCard cards={[1, 2, 3]} onSubmit={neverCalled} />);

    const questionInput = screen.getByLabelText('Gib hier deine Frage ein:');
    userEvent.type(questionInput, ' {enter}');

    const answerInput = screen.getByLabelText('Und hier die richtige Antwort:');
    userEvent.type(answerInput, '{enter}');

    const categoryInput = screen.getByLabelText(/kategorie/i);
    userEvent.type(categoryInput, '{enter}');

    expect(neverCalled).not.toHaveBeenCalled();
  });
});
