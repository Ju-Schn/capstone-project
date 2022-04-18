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
import ScreenReaderOnly from '../components/ScreenReaderOnly';

import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const { cards } = useCards();

  const {
    handleQuitDeck,
    doneCards,
    cardDeck,
    setCardDeck,
    handleRestart,
    showCreateDeckModal,
    handleChangeFilterClick,
    handleSizeChange,
    decksize,
    handleDifficulty,
    handleNextCard,
    setShowCreateDeckModal,
    shuffle,
  } = useCardDecks();

  const {
    handleDifficultyCards,
    setDifficulty,
    difficulty,
    easyActive,
    mediumActive,
    difficultActive,
  } = useDifficulty();

  const { category, setCategory, handleChange, handleResetFilter } =
    useCategory();

  let currentCard = cardDeck[0];

  console.log(decksize);
  console.log(doneCards);

  if (cardDeck.length === 0 && doneCards < 5)
    return (
      <FlexWrapper>
        {showCreateDeckModal && (
          <CreateDeckModal
            onChangeFilterClick={handleChangeFilterClick}
            onCreateCardClick={() => navigate('/create-card')}
          />
        )}
        <StyledTitle id="form-titel">Erstelle einen Karten-Stapel</StyledTitle>
        <label htmlFor="decksize">
          <ScreenReaderOnly>Stapelgröße:</ScreenReaderOnly>
        </label>
        <StyledDropdown
          id="decksize"
          onChange={handleSizeChange}
          name="decksize"
          type="number"
          required
        >
          <option value="">Stapelgröße: *erforderlich</option>
          <option disabled={cards.length < 5} value={5}>
            5
          </option>
          <option disabled={cards.length < 10} value={10}>
            10
          </option>
          <option disabled={cards.length < 20} value={20}>
            20
          </option>
          <option disabled={cards.length < 40} value={40}>
            40
          </option>
        </StyledDropdown>
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
  if (cardDeck?.length === 0)
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

  function handleCreateDeck(event) {
    event.preventDefault();
    const filteredByDifficulty = cards.filter(card =>
      difficulty ? card.difficulty === difficulty : card
    );

    const filteredByCategory = filteredByDifficulty.filter(card =>
      category ? card.categories.includes(category) : card
    );
    if (filteredByCategory.length < decksize) {
      setShowCreateDeckModal(true);
    } else {
      setCategory('');
      setDifficulty('');
      setCardDeck(shuffle(filteredByCategory).slice(0, decksize));
    }
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

const StyledDropdown = styled.select`
  background-color: #f2b705;
  font-family: inherit;
  font-size: 100%;
  border: none;
  border-radius: 30px;
  width: 60%;
  box-shadow: rgba(140, 14, 3, 0.4) 0px 8px 24px;
  margin: 8px;
  align-self: center;
`;
