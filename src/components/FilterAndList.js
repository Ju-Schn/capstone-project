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
  const [easyActive, setEasyActive] = useState(false);
  const [mediumActive, setMediumActive] = useState(false);
  const [difficultActive, setDifficultActive] = useState(false);

  return (
    <GridWrapper>
      <Filter
        value={value}
        onChange={handleChange}
        onResetFilter={handleResetFilter}
        allCategories={allCategories}
        onDifficultyCards={handleDifficultyCards}
        easyActive={easyActive}
        mediumActive={mediumActive}
        difficultActive={difficultActive}
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
    if (event.target.value === 'easy') {
      setEasyActive(true);
      setMediumActive(false);
      setDifficultActive(false);
    }
    if (event.target.value === 'medium') {
      setMediumActive(true);
      setEasyActive(false);
      setDifficultActive(false);
    }
    if (event.target.value === 'difficult') {
      setDifficultActive(true);
      setEasyActive(false);
      setMediumActive(false);
    }
    if (event.target.value === '') {
      setEasyActive(false);
      setMediumActive(false);
      setDifficultActive(false);
    }
  }
}

const GridWrapper = styled.main`
  display: grid;
  grid-template-rows: 56px 56px auto 48px;
  height: 100vh;
  margin: 0;
  padding: 0;
`;
