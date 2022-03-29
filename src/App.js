import { useState } from 'react';
import { nanoid } from 'nanoid';
import CardList from './components/CardList';
import CardForm from './components/CardForm';

function App({ questionText, answerText }) {
  const [cards, setCards] = useState([]);
  console.log(cards);
  return <>{cards.length > 0 ? <CardList question={questionText} answer={answerText} cards={cards} /> : <CardForm cards={cards} onSubmit={handleNewCard} />}</>;

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
