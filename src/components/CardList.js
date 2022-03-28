import Card from './Card';
import CardForm from './CardForm';
import styled from 'styled-components';

export default function CardList({ cards }) {
  return (
    <StyledList role="list" aria-label="Karten">
      {cards ? (
        cards.map(({ questionText, answerText, _id }) => (
          <li key={_id}>
            <Card _id={_id} question={questionText} answer={answerText} />
          </li>
        ))
      ) : (
        <CardForm />
      )}
    </StyledList>
  );
}

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
