import Card from '../components/Card';
import styled from 'styled-components';
import DeleteModal from '../components/modals/DeleteModal';
import Navigation from '../components/navigations/Navigation';
import Input from '../components/Input';
import StyledButton from '../components/StyledButton';

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
      <FlexWrapper>
        <Input
          labelText="Filtere nach Kategorie: "
          variant="search"
          placeholder="z.B. react"
        />

        <StyledButton variant="search">
          <svg
            fill="#8c0e03"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="32px"
            height="32px"
          >
            <path d="M22 20L20 22 14 16 14 14 16 14z" />
            <path
              fill="none"
              stroke="#8c0e03"
              stroke-miterlimit="10"
              stroke-width="2"
              d="M9 3A6 6 0 1 0 9 15A6 6 0 1 0 9 3Z"
            />
            <path
              fill="none"
              stroke="#8c0e03"
              stroke-miterlimit="10"
              d="M13 13L15.5 15.5"
            />
          </svg>
        </StyledButton>
      </FlexWrapper>
      <StyledList role="list" aria-label="Karten">
        {cards.map(({ question, answer, _id, isPinned, categories }) => (
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
  grid-template-rows: 96px auto 48px;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

const FlexWrapper = styled.section`
  display: flex;
  align-items: center;
  padding: 16px;
`;
