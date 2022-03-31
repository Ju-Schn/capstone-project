import { useState } from 'react';
import { nanoid } from 'nanoid';
import CardList from './components/CardList';
import CardForm from './components/CardForm';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [cards, setCards] = useLocalStorage('cards', []);
  const [changePage, setChangePage] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [currentId, setCurrentId] = useState('');

  return (
    <>
      {cards.length > 0 && changePage === false ? (
        <CardList
          cards={cards}
          onCreate={handleChangePage}
          onDeleteConfirm={handleDeleteCard}
          onKeepConfirm={() => setShowModal(false)}
          onTrashClick={handleTrashClick}
          showModal={showModal}
        />
      ) : (
        <CardForm
          cards={cards}
          onSubmit={handleNewCard}
          onClick={handleChangePage}
        />
      )}
    </>
  );

  function handleNewCard(questionText, answerText) {
    const newCard = {
      question: questionText,
      answer: answerText,
      _id: nanoid(),
    };
    setCards([newCard, ...cards]);
  }

  function handleChangePage() {
    setChangePage(!changePage);
  }

  function handleTrashClick(id) {
    setShowModal(true);
    setCurrentId(id);
  }

  function handleDeleteCard() {
    setCards(cards.filter(card => card._id !== currentId));
    setShowModal(false);
  }
}

export default App;
