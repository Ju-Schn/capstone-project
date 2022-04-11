import Card from '../components/Card';
import DeleteModal from '../components/modals/DeleteModal';
import Navigation from '../components/navigations/Navigation';
import ScreenReaderOnly from '../components/ScreenReaderOnly';
import StyledButton from '../components/StyledButton';

import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home({
  cards,
  onDeleteConfirm,
  onTrashClick,
  onKeepConfirm,
  showModal,
  onPinClick,
  allCategories,
  onCountRights,
  onCountWrongs,
  onShowHide,
}) {
  const [value, setValue] = useState('');

  const navigate = useNavigate();

  if (cards.length === 0) {
    return (
      <StyledEmptyState>
        <h2>Du hast bisher noch keine Karte</h2>
        <StyledButton onClick={handleFirstCard}>
          Erstelle deine erste Karte
        </StyledButton>
      </StyledEmptyState>
    );
  } else {
    return (
      <GridWrapper>
        <FlexWrapper>
          <label>
            <ScreenReaderOnly>Kategorieauswahl:</ScreenReaderOnly>
          </label>
          <StyledDropdown
            id="categories"
            onChange={handleChange}
            name="categories"
            type="text"
            value={value}
          >
            <option value="">Kategorieauswahl:</option>
            {allCategories?.map(category =>
              category ? (
                <option key={category} value={category}>
                  {category}
                </option>
              ) : null
            )}
          </StyledDropdown>
          <StyledButton onClick={handleResetFilter}>Alle</StyledButton>
        </FlexWrapper>
        <StyledList role="list" aria-label="Karten">
          {value
            ? cards?.map(
                ({
                  question,
                  answer,
                  _id,
                  isPinned,
                  categories,
                  countRight,
                  countWrong,
                  showCounts,
                  quotient,
                }) => {
                  if (categories.includes(value))
                    return (
                      <li key={_id}>
                        <Card
                          _id={_id}
                          question={question}
                          answer={answer}
                          onTrashClick={onTrashClick}
                          onPinClick={onPinClick}
                          isPinned={isPinned}
                          showCounts={showCounts}
                          categories={categories}
                          countRight={countRight}
                          countWrong={countWrong}
                          onCountRights={onCountRights}
                          onCountWrongs={onCountWrongs}
                          onShowHide={onShowHide}
                          quotient={quotient}
                        />
                      </li>
                    );
                  else return [];
                }
              )
            : cards?.map(
                ({
                  question,
                  answer,
                  _id,
                  isPinned,
                  categories,
                  countRight,
                  countWrong,
                  showCounts,
                  quotient,
                }) => (
                  <li key={_id}>
                    <Card
                      _id={_id}
                      question={question}
                      answer={answer}
                      onTrashClick={onTrashClick}
                      onPinClick={onPinClick}
                      isPinned={isPinned}
                      showCounts={showCounts}
                      categories={categories}
                      countRight={countRight}
                      countWrong={countWrong}
                      onCountRights={onCountRights}
                      onCountWrongs={onCountWrongs}
                      onShowHide={onShowHide}
                      quotient={quotient}
                    />
                  </li>
                )
              )}
        </StyledList>
        {showModal && (
          <DeleteModal
            onDeleteConfirm={onDeleteConfirm}
            onKeepConfirm={onKeepConfirm}
          />
        )}
        <Navigation />
      </GridWrapper>
    );
  }

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleResetFilter() {
    setValue('');
  }

  function handleFirstCard() {
    navigate('/create-card');
  }
}

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  overflow-y: auto;
  margin: 0;
`;

const GridWrapper = styled.main`
  display: grid;
  grid-template-rows: 56px auto 48px;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

const FlexWrapper = styled.section`
  display: flex;
  gap: 8px;
`;

const StyledDropdown = styled.select`
  background-color: #f2b705;
  font-family: inherit;
  font-size: 100%;
  border: none;
  border-radius: 30px;
  width: 80%;
  box-shadow: rgba(140, 14, 3, 0.4) 0px 8px 24px;
  margin: 8px;
`;

const StyledEmptyState = styled.section`
  padding: 16px;
  padding-top: 160px;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 16px;
`;
