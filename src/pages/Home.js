import Card from '../components/Card';
import styled from 'styled-components';
import DeleteModal from '../components/modals/DeleteModal';
import Navigation from '../components/Navigation';

export default function Home({
  cards,
  onDeleteConfirm,
  onTrashClick,
  onKeepConfirm,
  showModal,
  onPinClick,
}) {
  return (
    <PositionWrapper>
      <StyledList role="list" aria-label="Karten">
        {cards.map(({ question, answer, _id, isPinned }) => (
          <li key={_id}>
            <Card
              _id={_id}
              question={question}
              answer={answer}
              onTrashClick={onTrashClick}
              onPinClick={onPinClick}
              isPinned={isPinned}
            />
          </li>
        ))}
        {showModal && (
          <DeleteModal
            onDeleteConfirm={onDeleteConfirm}
            onKeepConfirm={onKeepConfirm}
          />
        )}
      </StyledList>
      <Navigation />
    </PositionWrapper>
  );
}

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;
  margin: 8px 16px 100px 16px;
  overflow-y: auto;
`;

const PositionWrapper = styled.section`
  position: relative;
`;
