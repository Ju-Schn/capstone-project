import Navigation from './navigations/Navigation';
import Filter from './Filter';
import CardList from './lists/CardList';
import DeleteModal from './modals/DeleteModal';

import useCategory from '../hooks/useCategory';
import useDifficulty from '../hooks/useDifficulty';

import styled from 'styled-components';

export default function FilterAndList({
  onDeleteConfirm,
  onTrashClick,
  onKeepConfirm,
  onDeleteFromDatabaseConfirm,
  showModal,
  onPinClick,
  onCountRights,
  onCountWrongs,
  allCategories,
  onShowHide,
  personalCards,
}) {
  const {
    difficulty,
    easyActive,
    mediumActive,
    difficultActive,
    handleDifficultyCards,
  } = useDifficulty();
  const { handleChange, handleResetFilter, category } = useCategory();

  return (
    <GridWrapper>
      {showModal && (
        <DeleteModal
          onDeleteConfirm={onDeleteConfirm}
          onKeepConfirm={onKeepConfirm}
          onDeleteFromDatabaseConfirm={onDeleteFromDatabaseConfirm}
        />
      )}
      <Filter
        value={category}
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
        showModal={showModal}
        onPinClick={onPinClick}
        onCountRights={onCountRights}
        onCountWrongs={onCountWrongs}
        onDeleteConfirm={onDeleteConfirm}
        onKeepConfirm={onKeepConfirm}
        onTrashClick={onTrashClick}
        onShowHide={onShowHide}
        category={category}
        personalCards={personalCards}
      />
      <Navigation />
    </GridWrapper>
  );
}

const GridWrapper = styled.main`
  display: grid;
  grid-template-rows: 56px 56px auto 48px;
  height: 100vh;
  margin: 0;
  padding: 0;
`;
