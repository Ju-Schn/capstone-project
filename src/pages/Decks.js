import Filter from '../components/Filter';
import StyledButton from '../components/StyledButton';
import Card from '../components/Card';
import Navigation from '../components/navigations/Navigation';
import CreateDeckModal from '../components/modals/CreateDeckModal';
import useCategory from '../hooks/useCategory';
import useDifficulty from '../hooks/useDifficulty';
import useCardDecks from '../hooks/useCardDecks';
import DeleteModal from '../components/modals/DeleteModal';
import useCards from '../hooks/useCards';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveToLocal } from '../utils/localStorage';
import styled from 'styled-components';

export default function Decks({
  allCategories,
  onDeleteConfirm,
  onKeepConfirm,
  showModal,
  onCountRights,
  onCountWrongs,
  onTrashClick,
  onPinClick,
}) {
  const [showCreateDeckModal, setShowCreateDeckModal] = useState(false);
  const [cardDeck, setCardDeck] = useState([]);

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
  const { cards } = useCards();
  const { doneCards, setDoneCards } = useCardDecks();

  let currentCard = cardDeck[0];

  console.log(cards);
  console.log(cardDeck);

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

  if (cardDeck.length === 0 && doneCards < 5)
    return (
      <FlexWrapper>
        {showCreateDeckModal && (
          <CreateDeckModal
            onChangeFilterClick={handleChangeFilterClick}
            onCreateCardClick={handleCreateCardClick}
          />
        )}
        <StyledTitle id="form-titel">Erstelle einen Karten-Stapel</StyledTitle>
        <StyledFilters aria-labelledby="form-titel">
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
        </StyledFilters>

        <Navigation />
      </FlexWrapper>
    );
  if (cardDeck.length === 0 && doneCards.length === 5)
    return (
      <MessageWrapper>
        <StyledTitle>SUPER! Du hast den Stapel geschafft!</StyledTitle>
        <StyledMessage>
          <span>Was möchtest du als nächstes machen?</span>

          <ButtonWrapper>
            <StyledButton variant="yellow" onClick={handleRestart}>
              Wiederholen
            </StyledButton>
            <StyledButton variant="submit" onClick={handleQuitDeck}>
              Neuer Stapel
            </StyledButton>
          </ButtonWrapper>
        </StyledMessage>
      </MessageWrapper>
    );
  else
    return (
      <FlexWrapper>
        {showModal && (
          <DeleteModal
            onDeleteConfirm={onDeleteConfirm}
            onKeepConfirm={onKeepConfirm}
            additionalText="(Die Karte wird nach dem Verlassen des Stapels gelöscht)"
          />
        )}
        <StyledList role="list">
          <li key={currentCard._id}>
            <Card
              _id={currentCard._id}
              question={currentCard.question}
              answer={currentCard.answer}
              isPinned={currentCard.isPinned}
              categories={currentCard.categories}
              countRight={currentCard.countRight}
              countWrong={currentCard.countWrong}
              quotient={currentCard.quotient}
              difficulty={currentCard.difficulty}
              showCounts={currentCard.showCounts}
              onCountRights={() => handleCountRightsClick(currentCard._id)}
              onCountWrongs={() => handleCountWrongsClick(currentCard._id)}
              onTrashClick={onTrashClick}
              onPinClick={() => handlePinClick(currentCard._id)}
            />
          </li>
        </StyledList>
        <ButtonWrapper>
          <StyledButton variant="danger" onClick={handleQuitDeck}>
            Stapel verlassen
          </StyledButton>
          <StyledButton
            onClick={() => handleNextCard(currentCard._id)}
            variant="submit"
          >
            Nächste Karte
          </StyledButton>
        </ButtonWrapper>
      </FlexWrapper>
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
    setCardDeck(shuffle(doneCards));
    setDoneCards([]);
  }

  function handleQuitDeck() {
    setCardDeck([]);
    setDoneCards([]);
    setCategory('');
    setDifficulty('');
  }

  function handleCountRightsClick(_id) {
    setCardDeck(
      cardDeck.map(card => {
        if (card._id === _id) {
          return {
            showCounts: !card.showCounts,
            ...card,
            countRight: card.countRight + 1,
            quotient: (card.countRight + 1) / card.countWrong,
            difficulty: handleDifficulty(
              (card.countRight + 1) / card.countWrong
            ),
          };
        } else return card;
      })
    );
    onCountRights(_id);
  }

  function handleCountWrongsClick(_id) {
    setCardDeck(
      cardDeck.map(card => {
        if (card._id === _id) {
          return {
            showCounts: !card.showCounts,
            ...card,
            countWrong: card.countWrong + 1,
            quotient: card.countRight / (card.countWrong + 1),
            difficulty: handleDifficulty(
              (card.countRight + 1) / card.countWrong
            ),
          };
        } else return card;
      })
    );
    onCountWrongs(_id);
  }

  function handleDifficulty(quotient) {
    if (quotient >= 2) return 'easy';
    else if (quotient <= 0.5) return 'difficult';
    else return 'medium';
  }

  function handlePinClick(_id) {
    setCardDeck(
      cardDeck.map(card => {
        if (card._id === _id) {
          return { ...card, isPinned: !card.isPinned };
        } else return card;
      })
    );
    onPinClick(_id);
  }
}

const FlexWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ButtonWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-around;
`;

const StyledFilters = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  margin: 16px;
`;

const StyledTitle = styled.h2`
  margin: 32px 0 16px 0;
  text-align: center;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  padding-top: 80px;
  display: flex;
  justify-content: center;
`;

const MessageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

const StyledMessage = styled.section`
  width: 350px;
  border-radius: 30px;
  background-color: #f4e9c9;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 16px;
  text-align: center;
`;
