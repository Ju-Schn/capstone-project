import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Home from './pages/Home';
import CreateCard from './pages/CreateCard';
import Pinned from './pages/Pinned';
import { saveToLocal, loadFromLocal } from './utils/localStorage';

function App() {
  const [cards, setCards] = useState(loadFromLocal('cards') ?? []);
  const [allCategories, setAllCategories] = useState(
    loadFromLocal('allCategories') ?? []
  );
  const [showModal, setShowModal] = useState(false);
  const [currentId, setCurrentId] = useState('');
  console.log(allCategories);

  useEffect(() => {
    saveToLocal('allCategories', allCategories);
    saveToLocal('cards', cards);
  }, [cards, allCategories]);

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
    };
    setCards([newCard, ...cards]);
    handleCategories(newCard);
  }

  function handleCategories(newCard) {
    newCard.categories.forEach(category => {
      if (allCategories.includes(category)) {
        setAllCategories([...allCategories]);
      } else {
        setAllCategories([...allCategories, category]);
      }
    });
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
}

export default App;
