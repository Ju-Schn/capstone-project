import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CardForm from './CardForm';

describe('EntryForm', () => {
  it('shows a question and the answer', () => {
    const callback = jest.fn();
    render(<CardForm onSubmit={callback} />);

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

  it('has a maxLength of 200 for text in both inputs', () => {
    const neverCalled = jest.fn();
    render(<CardForm onSubmit={neverCalled} />);

    const questionInput = screen.getByLabelText('Gib hier deine Frage ein:');
    userEvent.type(questionInput, 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores e{enter}'); // 201 characters, maxLength = 200

    const answerInput = screen.getByLabelText('Und hier die richtige Antwort:');
    userEvent.type(answerInput, 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores e{enter}');

    expect(neverCalled).not.toHaveBeenCalled();
  });

  it('does not submit when at least one input is empty or only whitespace');
  const neverCalled = jest.fn();
  render(<CardForm onSubmit={neverCalled} />);

  const questionInput = screen.getByLabelText('Gib hier deine Frage ein:');
  userEvent.type(questionInput, ' ');

  const answerInput = screen.getByLabelText('Und hier die richtige Antwort:');
  userEvent.type(answerInput, '');

  expect(neverCalled).not.toHaveBeenCalled();
});
