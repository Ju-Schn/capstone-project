import { useState } from 'react';
import { loadFromLocal } from '../utils/localStorage';

export default function useDifficulty() {
  const [difficulty, setDifficulty] = useState(
    loadFromLocal('difficulty') ?? ''
  );
  const [easyActive, setEasyActive] = useState(
    loadFromLocal('easyActive') ?? false
  );
  const [mediumActive, setMediumActive] = useState(
    loadFromLocal('mediumActive') ?? false
  );
  const [difficultActive, setDifficultActive] = useState(
    loadFromLocal('difficultActive') ?? false
  );

  function handleDifficultyCards(event) {
    event.preventDefault();
    setDifficulty(event.target.value);

    if (event.target.value === 'easy') {
      setEasyActive(true);
      setMediumActive(false);
      setDifficultActive(false);
    }
    if (event.target.value === 'medium') {
      setMediumActive(true);
      setEasyActive(false);
      setDifficultActive(false);
    }
    if (event.target.value === 'difficult') {
      setDifficultActive(true);
      setEasyActive(false);
      setMediumActive(false);
    }
    if (event.target.value === '') {
      setEasyActive(false);
      setMediumActive(false);
      setDifficultActive(false);
    }
  }

  function handleDifficulty(quotient) {
    if (quotient >= 2) return 'easy';
    else if (quotient <= 0.5) return 'difficult';
    else return 'medium';
  }

  return {
    difficulty,
    easyActive,
    mediumActive,
    difficultActive,
    setDifficulty,
    handleDifficultyCards,
    handleDifficulty,
  };
}
