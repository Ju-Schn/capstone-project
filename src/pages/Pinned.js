import Card from '../components/Card';
import Navigation from '../components/Navigation';
import DeleteModal from '../components/modals/DeleteModal';
import styled from 'styled-components';

export default function Pinned({
  cards,
  onDeleteConfirm,
  onTrashClick,
  onKeepConfirm,
  showModal,
  onPinClick,
}) {
  return (
    <PositionWrapper>
      <StyledList role="list">
        {cards.map(card => {
          if (card.isPinned === true)
            return (
              <li key={card._id}>
                <Card
                  _id={card._id}
                  question={card.question}
                  answer={card.answer}
                  onTrashClick={onTrashClick}
                  onPinClick={onPinClick}
                  isPinned={card.isPinned}
                />
              </li>
            );
          else return [];
        })}

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
  margin: 10px 16px 100px 16px;
  position: relative;
`;

const PositionWrapper = styled.section`
  position: relative;
`;
