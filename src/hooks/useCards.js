import { loadFromLocal } from '../utils/localStorage';
import { useState } from 'react';

export default function usePersonalCards() {
  const [personalCards, setPersonalCards] = useState(
    loadFromLocal('personalCards') ?? []
  );

  return { personalCards, setPersonalCards };
}
