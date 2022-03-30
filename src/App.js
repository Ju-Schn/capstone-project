import { useState } from 'react';
import { nanoid } from 'nanoid';
import CardList from './components/CardList';
import CardForm from './components/CardForm';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [cards, setCards] = useLocalStorage('cards', []);
  const [changePage, setChangePage] = useState(true);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {cards.length > 0 && changePage === false ? (
        <CardList
          cards={cards}
          onCreate={handleChangePage}
          onDeleteCard={handleDeleteCard}
          onKeep={() => setShowModal(false)}
          onDelete={() => setShowModal(true)}
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

  function handleDeleteCard(cardId) {
    setCards();
    setShowModal(false);
  }
}

export default App;
