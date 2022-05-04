import Card from '../components/Card';
import Navigation from '../components/navigations/Navigation';
import DeleteModal from '../components/modals/DeleteModal';

import useCards from '../hooks/useCards';
import useDelete from '../hooks/useDelete';

import styled from 'styled-components';

export default function Pinned({
  onPinClick,
  onCountRights,
  onCountWrongs,
}) {
  const {personalCards} = useCards();
  const {handleTrashClick, handleDeleteCard, handleDeleteFromDatabase, showModal, setShowModal} = useDelete()
  return (
    <GridWrapper>
      {showModal && (
        <DeleteModal
          onDeleteConfirm={handleDeleteCard}
          onKeepConfirm={() => setShowModal(false)}
          onDeleteFromDatabaseConfirm={handleDeleteFromDatabase}
        />
      )}
      <Header>Deine Pinnwand 📌</Header>
      <StyledList role="list">
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
          }) => {
            if (isPinned === true)
              return (
                <li key={_id}>
                  <Card
                    _id={_id}
                    question={question}
                    answer={answer}
                    onTrashClick={() => handleTrashClick(_id)}
                    onPinClick={onPinClick}
                    isPinned={isPinned}
                    categories={categories}
                    countRight={countRight}
                    countWrong={countWrong}
                    showCounts={showCounts}
                    onCountRights={onCountRights}
                    onCountWrongs={onCountWrongs}
                  />
                </li>
              );
            else return [];
          }
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
  grid-template-rows: 48px auto 48px;
  height: 100vh;
`;

const Header = styled.h2`
  text-align: center;
  font-size: 32px;
  margin-top: 16px;
  margin-bottom: 8px;
`;
