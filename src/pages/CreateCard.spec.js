import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CreateCard from './CreateCard';
import { MemoryRouter } from 'react-router-dom';

describe('CreateCard', () => {
  it('does not submit when one of the repuired inputs is empty or only whitespace', () => {
    const neverCalled = jest.fn();
    render(
      <MemoryRouter>
        <CreateCard cards={[1, 2, 3]} onSubmit={neverCalled} />
      </MemoryRouter>
    );

    const questionInput = screen.getByLabelText('Gib hier deine Frage ein:');
    userEvent.type(questionInput, ' {enter}');

    const answerInput = screen.getByLabelText('Und hier die richtige Antwort:');
    userEvent.type(answerInput, '{enter}');

    const categoryInput = screen.getAllByLabelText(/kategorie/i);
    userEvent.type(categoryInput[0], '{enter}');

    expect(neverCalled).not.toHaveBeenCalled();
  });
});
