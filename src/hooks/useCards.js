import { loadFromLocal } from '../utils/localStorage';
import { useState } from 'react';

export default function useCards() {
  const [cards, setCards] = useState(loadFromLocal('cards') ?? []);

  return { cards, setCards };
}
