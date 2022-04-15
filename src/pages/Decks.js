import Filter from '../components/Filter';
import StyledButton from '../components/StyledButton';
import Card from '../components/Card';
import Navigation from '../components/navigations/Navigation';
import CreateDeckModal from '../components/modals/CreateDeckModal';
import useCategory from '../hooks/useCategory';
import useDifficulty from '../hooks/useDifficulty';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveToLocal, loadFromLocal } from '../utils/localStorage';

export default function Decks({ cards, allCategories }) {
  const [cardDeck, setCardDeck] = useState([]);
  const [doneCards, setDoneCards] = useState([]);
  const [showCreateDeckModal, setShowCreateDeckModal] = useState(false);

  let currentCard = [cardDeck[Math.floor(Math.random() * cardDeck.length)]];
  const navigate = useNavigate();

  const {
    difficulty,
    setDifficulty,
    handleDifficultyCards,
    easyActive,
    mediumActive,
    difficultActive,
  } = useDifficulty();
  const { category, handleChange, handleResetFilter, setCategory } =
    useCategory();

  useEffect(() => {
    saveToLocal('difficulty', difficulty);
    saveToLocal('easyActive', easyActive);
    saveToLocal('mediumActive', mediumActive);
    saveToLocal('difficultActive', difficultActive);
    saveToLocal('cardDeck', cardDeck);
    saveToLocal('doneCards', doneCards);
  }, [
    cardDeck,
    difficulty,
    doneCards,
    easyActive,
    mediumActive,
    difficultActive,
  ]);

  console.log(difficulty);
  if (cardDeck.length === 0 && doneCards < 5)
    return (
      <>
        <h2 id="form-titel">Erstelle einen Karten-Stapel</h2>
        <form aria-labelledby="form-titel">
          <Filter
            allCategories={allCategories}
            onChange={handleChange}
            onDifficultyCards={handleDifficultyCards}
            onResetFilter={handleResetFilter}
            easyActive={easyActive}
            mediumActive={mediumActive}
            difficultActive={difficultActive}
          />
          <StyledButton onClick={handleCreateDeck} variant="submit">
            Erstellen
          </StyledButton>
        </form>
        {showCreateDeckModal && (
          <CreateDeckModal
            onChangeFilterClick={handleChangeFilterClick}
            onCreateCardClick={handleCreateCardClick}
          />
        )}
        <Navigation />
      </>
    );
  if (cardDeck.length === 0 && doneCards.length === 5)
    return (
      <>
        <h2>SUPER! Du hast den Stapel geschafft!</h2>
        <span>Was möchtest du als nächstes machen?</span>
        <StyledButton onClick={handleRestart}>Wiederholen</StyledButton>
        <StyledButton onClick={handleQuitDeck}>Neuer Stapel</StyledButton>
      </>
    );
  else
    return (
      <>
        {currentCard.map(
          ({
            _id,
            question,
            answer,
            onTrashClick,
            onPinClick,
            isPinned,
            categories,
            countRight,
            countWrong,
            showCounts,
            onCountRights,
            onCountWrongs,
          }) => (
            <Card
              _id={_id}
              question={question}
              answer={answer}
              onTrashClick={onTrashClick}
              onPinClick={onPinClick}
              isPinned={isPinned}
              categories={categories}
              countRight={countRight}
              countWrong={countWrong}
              showCounts={showCounts}
              onCountRights={onCountRights}
              onCountWrongs={onCountWrongs}
            />
          )
        )}

        <StyledButton variant="danger" onClick={handleQuitDeck}>
          Stapel verlassen
        </StyledButton>
        <StyledButton
          onClick={() => handleNextCard(currentCard[0]._id)}
          variant="submit"
        >
          Nächste Karte
        </StyledButton>
      </>
    );

  // Using the Fisher Yates Shuffle Algorithm
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  function handleCreateDeck(event) {
    event.preventDefault();
    const filteredByDifficulty = cards.filter(card =>
      difficulty ? card.difficulty === difficulty : card
    );

    const filteredByCategory = filteredByDifficulty.filter(card =>
      category ? card.categories.includes(category) : card
    );
    if (filteredByCategory.length < 5) {
      setShowCreateDeckModal(true);
    } else {
      setCategory('');
      setDifficulty('');
      setCardDeck(shuffle(filteredByCategory).slice(0, 5));
    }
  }

  function handleNextCard(id) {
    setCardDeck(cardDeck.filter(card => card._id !== id));
    const doneCard = cardDeck.filter(card => card._id === id);
    setDoneCards([...doneCards, ...doneCard]);
  }

  function handleChangeFilterClick() {
    setShowCreateDeckModal(false);
  }

  function handleCreateCardClick() {
    navigate('/create-card');
  }

  function handleRestart() {
    setCardDeck(doneCards);
    setDoneCards([]);
  }

  function handleQuitDeck() {
    setCardDeck([]);
    setDoneCards([]);
    setCategory('');
    setDifficulty('');
  }
}
