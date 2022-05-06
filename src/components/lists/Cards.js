import Card from '../Card';

import styled from 'styled-components';

export default function Cards({
  onPinClick,
  onCountRights,
  onCountWrongs,
  category,
  personalCards,
  onTrashClick
}) {
  return (
    <StyledList role="list" aria-label="Karten">
      {personalCards?.map(
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
          difficulty,
        }) =>
          category ? (
            categories.includes(category) && (
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
                  difficulty={difficulty}
                  showCounts={showCounts}
                  onCountRights={onCountRights}
                  onCountWrongs={onCountWrongs}
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
                onTrashClick={onTrashClick}
                onPinClick={onPinClick}
              />
            </li>
          )
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
