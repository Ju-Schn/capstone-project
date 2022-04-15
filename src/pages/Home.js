import StyledButton from '../components/StyledButton';
import FilterAndList from '../components/FilterAndList';

import styled from 'styled-components';
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
      <FilterAndList
        cards={cards}
        onDeleteConfirm={onDeleteConfirm}
        onTrashClick={onTrashClick}
        onKeepConfirm={onKeepConfirm}
        showModal={showModal}
        onPinClick={onPinClick}
        allCategories={allCategories}
        onCountRights={onCountRights}
        onCountWrongs={onCountWrongs}
        onShowHide={onShowHide}
      />
    );
  }

  function handleFirstCard() {
    navigate('/create-card');
  }
}

const StyledEmptyState = styled.section`
  padding: 16px;
  padding-top: 160px;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 16px;
`;
