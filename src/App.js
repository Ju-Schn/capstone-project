import { useState } from 'react';
import { nanoid } from 'nanoid';
import CardList from './components/CardList';
import CardForm from './components/CardForm';

function App({ questionText, answerText, onClick }) {
  const [cards, setCards] = useState([]);
  const [create, setCreate] = useState(false);

  return <>{cards.length > 0 && create === false ? <CardList question={questionText} answer={answerText} cards={cards} onClick={() => setCreate(true)} /> : <CardForm cards={cards} onSubmit={handleNewCard} />}</>;

  function handleNewCard(questionText, answerText) {
    const newCard = {
      question: questionText,
      answer: answerText,
      _id: nanoid(),
    };
    setCards([newCard, ...cards]);
  }
}

export default App;
