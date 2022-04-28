import StyledButton from '../components/StyledButton';
import FilterAndList from '../components/FilterAndList';
import { ReactComponent as SyncIcon } from '../svgs/sync.svg';
import ScreenReaderOnly from '../components/ScreenReaderOnly';

import useCards from '../hooks/useCards';

import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function Home({
  onDeleteConfirm,
  onTrashClick,
  onKeepConfirm,
  onDeleteFromDatabaseConfirm,
  showModal,
  onPinClick,
  allCategories,
  onCountRights,
  onCountWrongs,
  onShowHide,
  personalCards,
}) {
  const navigate = useNavigate();
  const { handleNewPersonalCard } = useCards();

  if (personalCards.length === 0) {
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
      <>
        <FlexWrapper>
          <StyledInformation>
            Bitte synchronisiere deine Karten regelmäßig
          </StyledInformation>
          <StyledButton variant="synchro" onClick={handleSynchro}>
            <ScreenReaderOnly>synchronisieren</ScreenReaderOnly>
            <SyncIcon />
          </StyledButton>
        </FlexWrapper>
        <FilterAndList
          personalCards={personalCards}
          onDeleteConfirm={onDeleteConfirm}
          onTrashClick={onTrashClick}
          onKeepConfirm={onKeepConfirm}
          onDeleteFromDatabaseConfirm={onDeleteFromDatabaseConfirm}
          showModal={showModal}
          onPinClick={onPinClick}
          allCategories={allCategories}
          onCountRights={onCountRights}
          onCountWrongs={onCountWrongs}
          onShowHide={onShowHide}
        />
      </>
    );
  }

  function handleFirstCard() {
    navigate('/create');
  }

  function handleSynchro() {
    handleNewPersonalCard();
    window.location.reload();
  }
}

const StyledInformation = styled.p`
  margin: 0;
  margin-top: 8px;
  text-align: center;
`;

const StyledEmptyState = styled.section`
  padding: 16px;
  padding-top: 160px;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 16px;
`;

const FlexWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;
