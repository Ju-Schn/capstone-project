import Card from '../components/Card';
import styled from 'styled-components';
import DeleteModal from '../components/modals/DeleteModal';
import Navigation from '../components/navigations/Navigation';
import { useState } from 'react';
import StyledButton from '../components/StyledButton';
import ScreenReaderOnly from '../components/ScreenReaderOnly';

export default function Home({
  cards,
  onDeleteConfirm,
  onTrashClick,
  onKeepConfirm,
  showModal,
  onPinClick,
  allCategories,
}) {
  const [currentFilter, setCurrentFilter] = useState('');
  const [value, setValue] = useState('');
  return (
    <GridWrapper>
      <FlexWrapper>
        <label>
          <ScreenReaderOnly>Wähle hier eine Kategorie:</ScreenReaderOnly>
        </label>
        <StyledDropdown
          id="categories"
          defaultValue={''}
          value={value}
          onChange={handleChange}
          name="categories"
        >
          <option value="">Wähle hier eine Kategorie:</option>
          {allCategories?.map(category =>
            category ? (
              <option
                onClick={() => setCurrentFilter(category)}
                value={value.category}
              >
                {category}
                {console.log(category)}
              </option>
            ) : null
          )}
        </StyledDropdown>
        <StyledButton onClick={handleResetFilter}>Alle</StyledButton>
      </FlexWrapper>
      <StyledList role="list" aria-label="Karten">
        {currentFilter
          ? cards?.map(({ question, answer, _id, isPinned, categories }) => {
              if (categories.includes(currentFilter))
                return (
                  <li key={_id}>
                    <Card
                      _id={_id}
                      question={question}
                      answer={answer}
                      onTrashClick={onTrashClick}
                      onPinClick={onPinClick}
                      isPinned={isPinned}
                      categories={categories}
                    />
                  </li>
                );
              else return [];
            })
          : cards?.map(({ question, answer, _id, isPinned, categories }) => (
              <li key={_id}>
                <Card
                  _id={_id}
                  question={question}
                  answer={answer}
                  onTrashClick={onTrashClick}
                  onPinClick={onPinClick}
                  isPinned={isPinned}
                  categories={categories}
                />
              </li>
            ))}
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

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleResetFilter() {
    setCurrentFilter('');
    setValue('');
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
  grid-template-rows: 48px auto 48px;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

const FlexWrapper = styled.section`
  display: flex;
`;

const StyledDropdown = styled.select`
  background-color: #f2b705;
  font-family: inherit;
  font-size: 112.5%;
  border: none;
  border-radius: 30px;
  width: 80%;
  box-shadow: rgba(140, 14, 3, 0.4) 0px 8px 24px;
  margin: 8px;
`;
