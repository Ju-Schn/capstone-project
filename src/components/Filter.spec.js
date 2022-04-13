import Filter from './Filter';

import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

describe('Filter', () => {
  it('renders 5 buttons', () => {
    render(<Filter />);

    const allButtons = screen.getAllByRole('button');
    const resetFilterButtons = screen.getAllByRole('button', { name: 'Alle' });
    const easyButton = screen.getByRole('button', { name: 'Leicht' });
    const mediumButton = screen.getByRole('button', { name: 'Mittel' });
    const difficultButton = screen.getByRole('button', { name: 'Schwer' });

    expect(allButtons).toHaveLength(5);
    expect(resetFilterButtons).toHaveLength(2);
    expect(easyButton).toBeInTheDocument();
    expect(mediumButton).toBeInTheDocument();
    expect(difficultButton).toBeInTheDocument();
  });

  it('calls onDifficultyCards when clicking one of the difficulty buttons', async () => {
    const callback = jest.fn();
    render(<Filter onDifficultyCards={callback} />);

    const easyButton = screen.getByRole('button', { name: 'Leicht' });
    await userEvent.click(easyButton);
    const mediumButton = screen.getByRole('button', { name: 'Mittel' });
    await userEvent.click(mediumButton);
    const difficultButton = screen.getByRole('button', { name: 'Schwer' });
    await userEvent.click(difficultButton);
    const resetFilterButtons = screen.getAllByRole('button', { name: /alle/i });
    await userEvent.click(resetFilterButtons[1]);

    expect(callback).toHaveBeenCalledTimes(4);
  });
});
