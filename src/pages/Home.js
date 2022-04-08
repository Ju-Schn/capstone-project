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
  allCategories,
}) {
  return (
    <GridWrapper>
      <StyledDropdown name="categories">
        <StyledOption value="">Wähle hier eine Kategorie:</StyledOption>
        {allCategories?.map(category => (
          <StyledOption value={category}>{category}</StyledOption>
        ))}
      </StyledDropdown>

      <StyledList role="list" aria-label="Karten">
        {cards?.map(({ question, answer, _id, isPinned, categories }) => (
          <li key={_id}>
            <Card
              _id={_id}
              question={question}
              answer={answer}
              onTrashClick={onTrashClick}
              onPinClick={onPinClick}
              isPinned={isPinned}
              categories={categories}
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
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  overflow-y: auto;
  margin: 0;
`;

const GridWrapper = styled.main`
  display: grid;
  grid-template-rows: 48px auto 48px;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

const StyledDropdown = styled.select`
  background-color: #f2b705;
  font-family: inherit;
  border: none;
  border-radius: 30px;
  width: 80%;
  box-shadow: rgba(140, 14, 3, 0.4) 0px 8px 24px;
  margin: 8px;

  &:active {
    border-radius: 30px;
    font-family: inherit;
  }
`;

const StyledOption = styled.option`
  border: none;
  border-radius: 30px;
  font-family: 'Architects Daughter', sans-serif;
`;
