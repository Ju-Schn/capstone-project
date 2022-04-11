import Card from '../components/Card';
import Navigation from '../components/navigations/Navigation';
import DeleteModal from '../components/modals/DeleteModal';
import styled from 'styled-components';

export default function Pinned({
  cards,
  onDeleteConfirm,
  onTrashClick,
  onKeepConfirm,
  showModal,
  onPinClick,
  onCountRight,
  onCountWrong,
}) {
  return (
    <GridWrapper>
      <StyledList role="list">
        {cards?.map(
          ({
            question,
            answer,
            _id,
            isPinned,
            categories,
            countRight,
            countWrong,
            showCounts,
          }) => {
            if (isPinned === true)
              return (
                <li key={_id}>
                  <Card
                    _id={_id}
                    question={question}
                    answer={answer}
                    onTrashClick={onTrashClick}
                    onPinClick={onPinClick}
                    isPinned={isPinned}
                    categories={categories}
                    countRight={countRight}
                    countWrong={countWrong}
                    showCounts={showCounts}
                    onCountRight={onCountRight}
                    onCountWrong={onCountWrong}
                  />
                </li>
              );
            else return [];
          }
        )}

        {showModal && (
          <DeleteModal
            onDeleteConfirm={onDeleteConfirm}
            onKeepConfirm={onKeepConfirm}
          />
        )}
      </StyledList>
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

const GridWrapper = styled.section`
  display: grid;
  grid-template-rows: auto 48px;
  height: 100vh;
`;
