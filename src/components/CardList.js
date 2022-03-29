import Card from './Card';
import styled from 'styled-components';
import { StyledButton } from './StyledButton';

export default function CardList({ cards }) {
  return (
    <FlexWrapper>
      <StyledList role="list" aria-label="Karten">
        {cards.map(({ question, answer, _id }) => (
          <li key={_id}>
            <Card _id={_id} question={question} answer={answer} />
          </li>
        ))}
      </StyledList>
      <StyledButton children={'Karte erstellen'} />
    </FlexWrapper>
  );
}

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FlexWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;
