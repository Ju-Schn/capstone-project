import styled from 'styled-components';
import StyledButton from '../StyledButton';

export default function DeleteModal({
  onKeepConfirm,
  onDeleteConfirm,
  onDeleteFromDatabaseConfirm,
  additionalText,
}) {
  return (
    <BackgroundModal>
      <GridModal>
        <span>Möchtest du die Karte wirklich löschen?</span>
        <span>{additionalText}</span>
        <ButtonWrapper>
          <StyledButton variant="submit" onClick={onKeepConfirm}>
            Behalten
          </StyledButton>
          <StyledButton variant="danger" onClick={onDeleteConfirm}>
            🚮 Lokal löschen
          </StyledButton>
          <StyledButton variant="danger" onClick={onDeleteFromDatabaseConfirm}>
            Für ALLE löschen 💣
          </StyledButton>
        </ButtonWrapper>
      </GridModal>
    </BackgroundModal>
  );
}

const BackgroundModal = styled.div`
  background-color: rgba(140, 14, 3, 0.8);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 3;
`;
const GridModal = styled.section`
  border-radius: 30px;
  display: grid;
  grid-template-rows: auto auto;
  background-color: #f4e9c9;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 300px;

  span {
    padding: 16px;
    text-align: center;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 8px;
  margin-bottom: 16px; ;
`;
