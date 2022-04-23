import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home';
import CreateCard from './pages/CreateCard';
import Pinned from './pages/Pinned';
import LandingPage from './pages/LandingPage';
import Decks from './pages/Decks';

import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { nanoid } from 'nanoid';
import { saveToLocal, loadFromLocal } from './utils/localStorage';
import usePersonalCards from './hooks/useCards';
import { ToastContainer } from 'react-toastify';

const fetcher = (...args) => fetch(...args).then(res => res.json());

function App() {
  const [allCategories, setAllCategories] = useState(
    loadFromLocal('allCategories') ?? []
  );
  const [showModal, setShowModal] = useState(false);
  const [currentId, setCurrentId] = useState('');
  const [personalCardsIds, setPersonalCardsIds] = useState(
    loadFromLocal('personalCardsIds') ?? []
  );
  const { personalCards, setPersonalCards } = usePersonalCards();

  useEffect(() => {
    saveToLocal('allCategories', allCategories);
    saveToLocal('personalCards', personalCards);
    saveToLocal('personalCardsIds', personalCardsIds);
  }, [personalCards, allCategories, personalCardsIds]);

  const {
    data: publicCards,
    error: cardsError,
    mutate: mutatePublicCards,
  } = useSWR('/api/public-cards', fetcher);
  console.log(personalCardsIds);

  if (cardsError) return <h1>Keine Verbindung zur Datenbank 👻</h1>;
  if (!publicCards && !cardsError) return <p>... loading ...</p>;

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/cards"
          element={
            <Home
              personalCards={personalCards}
              onDeleteConfirm={handleDeleteCard}
              onKeepConfirm={() => setShowModal(false)}
              onTrashClick={handleTrashClick}
              showModal={showModal}
              onPinClick={handlePinClick}
              allCategories={allCategories}
              onCountRights={handleCountRights}
              onCountWrongs={handleCountWrongs}
              onDeleteFromDatabaseConfirm={handleDeleteFromDatabase}
            />
          }
        />
        <Route
          path="/create"
          element={
            <CreateCard
              personalCards={personalCards}
              onAddNewCard={handleNewCard}
            />
          }
        ></Route>
        <Route
          path="/pinned"
          element={
            <Pinned
              onDeleteConfirm={handleDeleteCard}
              onKeepConfirm={() => setShowModal(false)}
              onTrashClick={handleTrashClick}
              showModal={showModal}
              onPinClick={handlePinClick}
              personalCards={personalCards}
              allCategories={allCategories}
              onCountRights={handleCountRights}
              onCountWrongs={handleCountWrongs}
            />
          }
        ></Route>
        <Route
          path="/decks"
          element={
            <Decks
              personalCards={personalCards}
              allCategories={allCategories}
              onDeleteConfirm={handleDeleteCard}
              onKeepConfirm={() => setShowModal(false)}
              showModal={showModal}
              onTrashClick={handleTrashClick}
              onPinClick={handlePinClick}
              onCountRights={handleCountRights}
              onCountWrongs={handleCountWrongs}
            />
          }
        ></Route>
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={2500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        role="alert"
      />
    </>
  );

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

    mutatePublicCards([...publicCards, newPublicCard], false);

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
      publicCard => personalCardsIds.includes(publicCard._id) === false
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

  function handleTrashClick(id) {
    setShowModal(true);
    setCurrentId(id);
  }

  function handleDeleteCard() {
    setPersonalCards(personalCards.filter(card => card._id !== currentId));
    setShowModal(false);
  }

  function handleDeleteFromDatabase() {}

  function handlePinClick(id) {
    setPersonalCards(
      personalCards.map(card => {
        if (card._id === id) {
          return { ...card, isPinned: !card.isPinned };
        } else return card;
      })
    );
  }

  function handleCountRights(id) {
    setPersonalCards(
      personalCards.map(card => {
        if (card._id === id) {
          return {
            ...card,
            countRight: card.countRight + 1,
            quotient: (card.countRight + 1) / card.countWrong,
            difficulty: handleDifficulty(
              (card.countRight + 1) / card.countWrong
            ),
            showCounts: !card.showCounts,
          };
        } else return card;
      })
    );
  }

  function handleCountWrongs(id) {
    setPersonalCards(
      personalCards.map(card => {
        if (card._id === id) {
          return {
            ...card,
            countWrong: card.countWrong + 1,
            quotient: card.countRight / (card.countWrong + 1),
            difficulty: handleDifficulty(
              card.countRight / (card.countWrong + 1)
            ),
            showCounts: !card.showCounts,
          };
        } else return card;
      })
    );
  }

  function handleDifficulty(quotient) {
    if (quotient >= 2) return 'easy';
    else if (quotient <= 0.5) return 'difficult';
    else return 'medium';
  }
}

export default App;
