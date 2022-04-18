import { useState, useEffect } from 'react';
import { loadFromLocal, saveToLocal } from '../utils/localStorage';
import useCategory from './useCategory';
import useDifficulty from './useDifficulty';
import useCards from './useCards';

export default function useCardDecks() {
  const [cardDeck, setCardDeck] = useState(loadFromLocal('cardDeck') ?? []);
  const [doneCards, setDoneCards] = useState(loadFromLocal('doneCards') ?? []);
  const [showCreateDeckModal, setShowCreateDeckModal] = useState(false);

  const { cards } = useCards();

  const {
    difficulty,
    setDifficulty,
    easyActive,
    mediumActive,
    difficultActive,
  } = useDifficulty();
  const { category, setCategory } = useCategory();

  useEffect(() => {
    saveToLocal('cardDeck', cardDeck);
    saveToLocal('doneCards', doneCards);
    saveToLocal('difficulty', difficulty);
    saveToLocal('easyActive', easyActive);
    saveToLocal('mediumActive', mediumActive);
    saveToLocal('difficultActive', difficultActive);
  }, [
    cardDeck,
    doneCards,
    difficulty,
    easyActive,
    mediumActive,
    difficultActive,
  ]);

  // Using the Fisher Yates Shuffle Algorithm
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  function handleCreateDeck(event) {
    event.preventDefault();
    const filteredByDifficulty = cards.filter(card =>
      difficulty ? card.difficulty === difficulty : card
    );

    const filteredByCategory = filteredByDifficulty.filter(card =>
      category ? card.categories.includes(category) : card
    );
    if (filteredByCategory.length < 5) {
      setShowCreateDeckModal(true);
    } else {
      setCategory('');
      setDifficulty('');
      setCardDeck(shuffle(filteredByCategory).slice(0, 5));
    }
  }

  function handleRestart() {
    setCardDeck(shuffle(doneCards));
    setDoneCards([]);
  }

  function handleQuitDeck() {
    setCardDeck([]);
    setDoneCards([]);
    setCategory('');
    setDifficulty('');
  }

  function handleChangeFilterClick() {
    setShowCreateDeckModal(false);
  }

  return {
    handleChangeFilterClick,
    showCreateDeckModal,
    handleQuitDeck,
    handleCreateDeck,
    cardDeck,
    setCardDeck,
    doneCards,
    setDoneCards,
    handleRestart,
  };
}
