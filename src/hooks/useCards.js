import useFetch from './useFetch';

import { loadFromLocal, saveToLocal } from '../utils/localStorage';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

export default function useCards() {
  const [personalCardsIds, setPersonalCardsIds] = useState(
    loadFromLocal('personalCardsIds') ?? []
  );
  const [allCategories, setAllCategories] = useState(
    loadFromLocal('allCategories') ?? []
  );
  const [personalCards, setPersonalCards] = useState(
    loadFromLocal('personalCards') ?? []
  );

  const { publicCards, mutatePublicCards } = useFetch();

  useEffect(() => {
    saveToLocal('personalCards', personalCards);
    saveToLocal('personalCardsIds', personalCardsIds);
    saveToLocal('allCategories', allCategories);
  }, [allCategories, personalCards, personalCardsIds]);

  async function handleNewCard(
    questionText,
    answerText,
    category1Text,
    category2Text,
    category3Text
  ) {
    const newPublicCard = {
      question: questionText,
      answer: answerText,
      categories: [category1Text, category2Text, category3Text],
      tempId: nanoid(),
    };

    mutatePublicCards([newPublicCard, ...publicCards], false);

    await fetch('/api/public-cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPublicCard),
    });

    mutatePublicCards();
    setAllCategories([
      ...allCategories,
      ...newPublicCard.categories.filter(
        category => !allCategories.includes(category)
      ),
    ]);
    handleNewPersonalCard();
  }

  function handleNewPersonalCard() {
    const newPersonalCards = publicCards?.filter(
      publicCard => !personalCardsIds.includes(publicCard._id)
    );
    setPersonalCards([
      ...newPersonalCards.map(personalCard => {
        return {
          ...personalCard,
          isPinned: false,
          showCounts: false,
          countRight: 0.0000000001,
          countWrong: 0.0000000001,
          quotient: 1,
          difficulty: 'medium',
        };
      }),
      ...personalCards,
    ]);
    setPersonalCardsIds([
      ...personalCardsIds,
      ...newPersonalCards.map(personalCard => {
        return personalCard._id;
      }),
    ]);
  }

  return {
    handleNewPersonalCard,
    personalCards,
    setPersonalCards,
    handleNewCard,
    allCategories,
  };
}
