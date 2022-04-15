import { useState } from 'react';

export default function useDifficulty() {
  const [difficulty, setDifficulty] = useState('');
  const [easyActive, setEasyActive] = useState(false);
  const [mediumActive, setMediumActive] = useState(false);
  const [difficultActive, setDifficultActive] = useState(false);

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
  return {
    difficulty,
    easyActive,
    mediumActive,
    difficultActive,
    setDifficulty,
    handleDifficultyCards,
  };
}
