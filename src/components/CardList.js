import Card from './Card';
import styled from 'styled-components';
import { StyledButton } from './StyledButton';

export default function CardList({ cards, onClick }) {
  return (
    <FlexWrapper>
      <StyledList role="list" aria-label="Karten">
        {cards.map(({ question, answer, _id }) => (
          <li key={_id}>
            <Card question={question} answer={answer} />
          </li>
        ))}
      </StyledList>
      <StyledButton
        variant={'create'}
        children={'Karte erstellen'}
        onClick={onClick}
      />
    </FlexWrapper>
  );
}

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;
  margin: 16px;
  margin-bottom: 100px;
`;

const FlexWrapper = styled.section`
  position: relative;
`;
