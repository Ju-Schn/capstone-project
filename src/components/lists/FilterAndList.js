import Navigation from '../navigations/Navigation';
import Filter from '../Filter';
import CardList from './CardList';
import DeleteModal from '../modals/DeleteModal';
import { ReactComponent as SyncIcon } from '../../svgs/sync.svg';
import ScreenReaderOnly from '../../components/ScreenReaderOnly';
import StyledButton from '../StyledButton';

import useCategory from '../../hooks/useCategory';
import useDifficulty from '../../hooks/useDifficulty';
import useDelete from '../../hooks/useDelete';
import useCards from '../../hooks/useCards';

import styled from 'styled-components';

export default function FilterAndList({
  onPinClick,
  onCountRights,
  onCountWrongs,
  allCategories,
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
  const {showModal, handleDeleteFromDatabase, handleTrashClick, handleDeleteCard, setShowModal} = useDelete()
  const { handleNewPersonalCard } = useCards();

  return (
    <GridWrapper>
      {showModal && (
        <DeleteModal
          onDeleteConfirm={handleDeleteCard}
          onKeepConfirm={() => setShowModal(false)}
          onDeleteFromDatabaseConfirm={handleDeleteFromDatabase}
        />
      )}
              <FlexWrapper>
          <StyledInformation>
            Bitte synchronisiere deine Karten regelmäßig
          </StyledInformation>
          <StyledButton variant="synchro" onClick={handleSynchro}>
            <ScreenReaderOnly>synchronisieren</ScreenReaderOnly>
            <SyncIcon />
          </StyledButton>
        </FlexWrapper>
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
        onPinClick={onPinClick}
        onCountRights={onCountRights}
        onCountWrongs={onCountWrongs}
        onTrashClick={handleTrashClick}
        category={category}
        personalCards={personalCards}
      />
      <Navigation />
    </GridWrapper>
  );

  function handleSynchro() {
    handleNewPersonalCard();
    window.location.reload();
  }
}

const GridWrapper = styled.main`
  display: grid;
  grid-template-rows: 48px 56px 56px auto 48px;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

const FlexWrapper = styled.section`
  display: flex;
  gap: 8px;
  margin-left: 8px;
`;

const StyledInformation = styled.p`
  margin: 0;
  margin-top: 8px;
  text-align: center;
`;


