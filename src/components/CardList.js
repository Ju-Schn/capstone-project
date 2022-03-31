import Card from './Card';
import styled from 'styled-components';
import StyledButton from './StyledButton';
import DeleteModal from './DeleteModal';

export default function CardList({
  cards,
  onDeleteCard,
  onDelete,
  onKeep,
  onCreate,
  showModal,
}) {
  return (
    <FlexWrapper>
      <StyledList role="list" aria-label="Karten">
        {cards.map(({ question, answer, _id }) => (
          <li key={_id}>
            <Card question={question} answer={answer} onDelete={onDelete} />
            <DeleteModal
              _id={_id}
              onDeleteCard={onDeleteCard}
              onKeep={onKeep}
              showModal={showModal}
            />
          </li>
        ))}
      </StyledList>
      <StyledButton variant={'create'} onClick={onCreate}>
        Karte erstellen
      </StyledButton>
    </FlexWrapper>
  );
}

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;
  margin: 10px 16px 100px 16px;
  position: relative;
`;

const FlexWrapper = styled.section`
  position: relative;
`;
