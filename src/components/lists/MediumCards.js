import Card from '../Card';
import DeleteModal from '../modals/DeleteModal';

import styled from 'styled-components';

export default function MediumCards({
  onDeleteConfirm,
  onTrashClick,
  onKeepConfirm,
  showModal,
  onPinClick,
  onCountRights,
  onCountWrongs,
  mediumCards,
  onShowHide,
  value,
}) {
  return (
    <StyledList role="list" aria-label="Karten">
      {mediumCards?.map(
        ({
          question,
          answer,
          _id,
          isPinned,
          categories,
          countRight,
          countWrong,
          showCounts,
          quotient,
        }) =>
          value ? (
            categories.includes(value) && (
              <li key={_id}>
                <Card
                  _id={_id}
                  question={question}
                  answer={answer}
                  quotient={quotient}
                  isPinned={isPinned}
                  categories={categories}
                  countRight={countRight}
                  countWrong={countWrong}
                  showCounts={showCounts}
                  onCountRights={onCountRights}
                  onCountWrongs={onCountWrongs}
                  onShowHide={onShowHide}
                  onTrashClick={onTrashClick}
                  onPinClick={onPinClick}
                />
              </li>
            )
          ) : (
            <li key={_id}>
              <Card
                _id={_id}
                question={question}
                answer={answer}
                quotient={quotient}
                isPinned={isPinned}
                categories={categories}
                countRight={countRight}
                countWrong={countWrong}
                showCounts={showCounts}
                onCountRights={onCountRights}
                onCountWrongs={onCountWrongs}
                onShowHide={onShowHide}
                onTrashClick={onTrashClick}
                onPinClick={onPinClick}
              />
            </li>
          )
      )}
      {showModal && (
        <DeleteModal
          onDeleteConfirm={onDeleteConfirm}
          onKeepConfirm={onKeepConfirm}
        />
      )}
    </StyledList>
  );
}

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  overflow-y: auto;
  margin: 0;
`;
