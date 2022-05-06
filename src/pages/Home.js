import StyledButton from '../components/StyledButton';
import FilterAndList from '../components/lists/FilterAndList';

import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function Home({
  onPinClick,
  allCategories,
  onCountRights,
  onCountWrongs,
  personalCards,
}) {
  const navigate = useNavigate();


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
        <FilterAndList
          personalCards={personalCards}
          onPinClick={onPinClick}
          allCategories={allCategories}
          onCountRights={onCountRights}
          onCountWrongs={onCountWrongs}
        />
    );
  }

  function handleFirstCard() {
    navigate('/create');
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

