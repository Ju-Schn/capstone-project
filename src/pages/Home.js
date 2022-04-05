import Card from '../components/Card';
import styled from 'styled-components';
import DeleteModal from '../components/modals/DeleteModal';
import Navigation from '../components/navigations/Navigation';

export default function Home({
  cards,
  onDeleteConfirm,
  onTrashClick,
  onKeepConfirm,
  showModal,
  onPinClick,
}) {
  return (
    <GridWrapper>
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
      </StyledList>
      {showModal && (
        <DeleteModal
          onDeleteConfirm={onDeleteConfirm}
          onKeepConfirm={onKeepConfirm}
        />
      )}
      <Navigation />
    </GridWrapper>
  );
}

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  overflow-y: auto;
  margin-bottom: 0;
`;

const GridWrapper = styled.main`
  display: grid;
  grid-template-rows: auto 48px;
  height: 100vh;
  margin: 0;
  padding: 0;
`;
