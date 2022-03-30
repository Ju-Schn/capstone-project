import { useState } from 'react';
import { nanoid } from 'nanoid';
import CardList from './components/CardList';
import CardForm from './components/CardForm';

function App() {
  const [cards, setCards] = useState([]);
  const [changePage, setChangePage] = useState(true);

  return (
    <>
      {cards.length > 0 && changePage === false && toList === true ? (
        <CardList cards={cards} onClick={handleChangePage} />
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
}

export default App;
