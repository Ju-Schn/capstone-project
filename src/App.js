import { useState } from 'react';
import { nanoid } from 'nanoid';
import CardList from './components/CardList';
import CardForm from './components/CardForm';

function App({ questionText, answerText, onClick }) {
  const [cards, setCards] = useState([]);
  const [toCreate, setToCreate] = useState(false);
  const [toList, setToList] = useState(false);

  return <>{cards.length > 0 && toCreate === false && toList === true ? <CardList question={questionText} answer={answerText} cards={cards} onClick={() => setToCreate(true)} /> : <CardForm cards={cards} onSubmit={handleNewCard} onClick={() => setToList(true)} />}</>;

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
