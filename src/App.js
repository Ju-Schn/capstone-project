import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import Home from './pages/Home';
import CreateCard from './pages/CreateCard';
import Pinned from './pages/Pinned';
import { useLocalStorage } from 'usehooks-ts';

function App() {
  const [cards, setCards] = useLocalStorage('cards', []);
  const [showModal, setShowModal] = useState(false);
  const [currentId, setCurrentId] = useState('');

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
      category1: category1Text,
      category2: category2Text,
      category3: category3Text,
      _id: nanoid(),
      isPinned: false,
    };
    setCards([newCard, ...cards]);
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
