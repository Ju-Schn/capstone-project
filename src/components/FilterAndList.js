import Navigation from './navigations/Navigation';
import Filter from './Filter';
import CardList from './lists/CardList';

import styled from 'styled-components';
import { useState } from 'react';

export default function FilterAndList({
  cards,
  onDeleteConfirm,
  onTrashClick,
  onKeepConfirm,
  showModal,
  onPinClick,
  onCountRights,
  onCountWrongs,
  allCategories,
  easyCards,
  mediumCards,
  difficultCards,
  onShowHide,
}) {
  const [value, setValue] = useState('');
  const [difficulty, setDifficulty] = useState('');

  return (
    <GridWrapper>
      <Filter
        value={value}
        onChange={handleChange}
        onResetFilter={handleResetFilter}
        allCategories={allCategories}
        onDifficultyCards={handleDifficultyCards}
      />
      <CardList
        difficulty={difficulty}
        easyCards={easyCards}
        mediumCards={mediumCards}
        difficultCards={difficultCards}
        cards={cards}
        showModal={showModal}
        onPinClick={onPinClick}
        onCountRights={onCountRights}
        onCountWrongs={onCountWrongs}
        onDeleteConfirm={onDeleteConfirm}
        onKeepConfirm={onKeepConfirm}
        onTrashClick={onTrashClick}
        onShowHide={onShowHide}
        value={value}
      />
      <Navigation />
    </GridWrapper>
  );

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleResetFilter() {
    setValue('');
  }

  function handleDifficultyCards(event) {
    setDifficulty(event.target.value);
  }
}

const GridWrapper = styled.main`
  display: grid;
  grid-template-rows: 56px 56px auto 48px;
  height: 100vh;
  margin: 0;
  padding: 0;
`;
