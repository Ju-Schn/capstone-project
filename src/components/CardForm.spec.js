import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CardForm from './CardForm';

describe('CardForm', () => {
  it('shows a question and the answer', () => {
    const callback = jest.fn();
    render(<CardForm cards={[1, 2, 3]} onSubmit={callback} />);

    const form = screen.getByRole('form', { name: 'Erstelle eine Karte' });
    expect(form).toBeInTheDocument();

    const questionInput = screen.getByLabelText('Gib hier deine Frage ein:');
    userEvent.type(questionInput, 'Lorem ipsum?{enter}');

    expect(form).toContainElement(questionInput);

    expect(callback).toHaveBeenCalledWith('Lorem ipsum?');

    const answerInput = screen.getByLabelText('Und hier die richtige Antwort:');
    userEvent.type(answerInput, 'dolor sit.{enter}');

    expect(form).toContainElement(answerInput);

    expect(callback).toHaveBeenCalledWith('dolor sit.');
  });

  it('does not submit when at least one input is empty or only whitespace', () => {
    const neverCalled = jest.fn();
    render(<CardForm cards={[1, 2, 3]} onSubmit={neverCalled} />);

    const questionInput = screen.getByLabelText('Gib hier deine Frage ein:');
    userEvent.type(questionInput, ' {enter}');

    const answerInput = screen.getByLabelText('Und hier die richtige Antwort:');
    userEvent.type(answerInput, '{enter}');

    expect(neverCalled).not.toHaveBeenCalled();
  });
});
