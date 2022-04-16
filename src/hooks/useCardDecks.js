import { useState } from 'react';
import { loadFromLocal } from '../utils/localStorage';

export default function useCardDecks() {
  const [cardDeck, setCardDeck] = useState(loadFromLocal('cardDeck') ?? []);
  const [doneCards, setDoneCards] = useState(loadFromLocal('doneCards') ?? []);

  return { cardDeck, setCardDeck, doneCards, setDoneCards };
}
