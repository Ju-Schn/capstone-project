import { useState, useEffect } from 'react';
import { loadFromLocal, saveToLocal } from '../utils/localStorage';
import useCategory from './useCategory';
import useDifficulty from './useDifficulty';
import useCards from './useCards';

export default function useCardDecks(_id) {
  const [cardDeck, setCardDeck] = useState(loadFromLocal('cardDeck') ?? []);
  const [doneCards, setDoneCards] = useState(loadFromLocal('doneCards') ?? []);
  const [showCreateDeckModal, setShowCreateDeckModal] = useState(false);
  const [decksize, setDecksize] = useState(loadFromLocal('decksize') ?? '');

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
    saveToLocal('decksize', decksize);
  }, [
    cardDeck,
    doneCards,
    difficulty,
    easyActive,
    mediumActive,
    difficultActive,
    decksize,
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

  function handleSizeChange(event) {
    event.preventDefault();
    setDecksize(event.target.value);
  }

  function handleNextCard(_id) {
    setCardDeck(cardDeck.filter(card => card._id !== _id));
    const doneCard = cardDeck.filter(card => card._id === _id);
    setDoneCards([...doneCards, ...doneCard]);
  }

  function handleDifficulty(quotient) {
    if (quotient >= 2) return 'easy';
    else if (quotient <= 0.5) return 'difficult';
    else return 'medium';
  }

  return {
    handleChangeFilterClick,
    showCreateDeckModal,
    handleQuitDeck,
    cardDeck,
    setCardDeck,
    doneCards,
    setDoneCards,
    handleRestart,
    handleSizeChange,
    decksize,
    handleNextCard,
    handleDifficulty,
    setShowCreateDeckModal,
    shuffle,
  };
}
