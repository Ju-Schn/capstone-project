import { useState } from 'react';

import useFetch from './useFetch';
import useCards from './useCards';

export default function useDelete() {
  const [showModal, setShowModal] = useState(false);
  const [currentId, setCurrentId] = useState('');

  const { publicCards, mutatePublicCards } = useFetch();
  const { personalCards, setPersonalCards } = useCards();

  function handleTrashClick(id) {
    setShowModal(true);
    setCurrentId(id);
  }

  async function handleDeleteFromDatabase() {
    const filteredEntries = publicCards.filter(card => card._id !== currentId);
    mutatePublicCards(filteredEntries, false);
    await fetch('/api/public-cards', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ currentId }),
    });

    mutatePublicCards();
    handleDeleteCard();
  }

  function handleDeleteCard() {
    setPersonalCards(personalCards.filter(card => card._id !== currentId));
    setShowModal(false);
    window.location.reload();
  }

  return {
    handleDeleteFromDatabase,
    currentId,
    handleTrashClick,
    showModal,
    setShowModal,
    handleDeleteCard,
  };
}
