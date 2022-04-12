import Home from './pages/Home';
import CreateCard from './pages/CreateCard';
import Pinned from './pages/Pinned';

import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { saveToLocal, loadFromLocal } from './utils/localStorage';

function App() {
  const [cards, setCards] = useState(loadFromLocal('cards') ?? []);
  const [easyCards, setEasyCards] = useState(loadFromLocal('easyCards') ?? []);
  const [mediumCards, setMediumCards] = useState(
    loadFromLocal('mediumCards') ?? []
  );
  const [difficultCards, setDifficultCards] = useState(
    loadFromLocal('difficultCards') ?? []
  );
  const [allCategories, setAllCategories] = useState(
    loadFromLocal('allCategories') ?? []
  );
  const [showModal, setShowModal] = useState(false);
  const [currentId, setCurrentId] = useState('');

  useEffect(() => {
    saveToLocal('allCategories', allCategories);
    saveToLocal('cards', cards);
    saveToLocal('easyCards', easyCards);
    saveToLocal('mediumCards', mediumCards);
    saveToLocal('difficultCards', difficultCards);
  }, [cards, allCategories, easyCards, mediumCards, difficultCards]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            cards={cards}
            onDeleteConfirm={handleDeleteCard}
            onKeepConfirm={() => setShowModal(false)}
            onTrashClick={handleTrashClick}
            showModal={showModal}
            onPinClick={handlePinClick}
            allCategories={allCategories}
            onCountRights={handleCountRights}
            onCountWrongs={handleCountWrongs}
          />
        }
      />
      <Route
        path="/create-card"
        element={<CreateCard cards={cards} onAddNewCard={handleNewCard} />}
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
            cards={cards}
            allCategories={allCategories}
            onCountRights={handleCountRights}
            onCountWrongs={handleCountWrongs}
          />
        }
      ></Route>
    </Routes>
  );

  function handleNewCard(
    questionText,
    answerText,
    category1Text,
    category2Text,
    category3Text
  ) {
    const newCard = {
      question: questionText,
      answer: answerText,
      categories: [category1Text, category2Text, category3Text],
      _id: nanoid(),
      isPinned: false,
      countRight: 0.0000000001,
      countWrong: 0.0000000001,
      quotient: 1,
      showCounts: false,
    };
    setCards([newCard, ...cards]);
    handleCategories(newCard);
  }

  function handleCategories(newCard) {
    const newCategory = newCard.categories.filter(
      category => !allCategories.includes(category)
    );
    setAllCategories([...allCategories, ...newCategory]);
  }

  function handleTrashClick(id) {
    setShowModal(true);
    setCurrentId(id);
  }

  function handleDeleteCard() {
    setCards(cards.filter(card => card._id !== currentId));
    setShowModal(false);
  }

  function handlePinClick(id) {
    setCards(
      cards.map(card => {
        if (card._id === id) {
          return { ...card, isPinned: !card.isPinned };
        } else return card;
      })
    );
  }

  function handleCountRights(id) {
    setCards(
      cards.map(card => {
        if (card._id === id) {
          return {
            ...card,
            countRight: card.countRight + 1,
            quotient: (card.countRight + 1) / card.countWrong,
            showCounts: !card.showCounts,
          };
        } else return card;
      })
    );
    handleDifficulty();
  }

  function handleCountWrongs(id) {
    setCards(
      cards.map(card => {
        if (card._id === id) {
          return {
            ...card,
            countWrong: card.countWrong + 1,
            quotient: card.countRight / (card.countWrong + 1),
            showCounts: !card.showCounts,
          };
        } else return card;
      })
    );
    handleDifficulty();
  }

  function handleDifficulty() {
    setEasyCards(cards.filter(card => card.quotient >= 2));
    setMediumCards(
      cards.filter(card => card.quotient < 2 && card.quotient > 0.5)
    );
    setDifficultCards(cards.filter(card => card.quotient <= 0.5));
    console.log(
      'easy ' + easyCards.quotient,
      'medium ' + mediumCards.quotient,
      'difficult ' + difficultCards.quotient
    );
  }
}

export default App;
