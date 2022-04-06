import styled from 'styled-components';
import StyledButton from '../StyledButton';

export default function FormModal({ onAddCard, onDiscard }) {
  return (
    <BackgroundModal>
      <GridModal>
        <Big>
          Im Eingabefeld sind noch Daten, mit denen du bisher keine Karte
          erstellt hast.
        </Big>
        <span>Möchtest du eine Karte erstellen?</span>
        <ButtonWrapper>
          <StyledButton variant="submit" onClick={onAddCard}>
            Karte erstellen
          </StyledButton>
          <StyledButton variant="danger" onClick={onDiscard}>
            Verwerfen & weiter
          </StyledButton>
        </ButtonWrapper>
      </GridModal>
    </BackgroundModal>
  );
}

const BackgroundModal = styled.div`
  background-color: rgba(217, 121, 4, 0.8);
  width: 100vw;
  height: 100vh;
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
  width: 320px;
  gap: 8px;

  span {
    padding: 8px;
    text-align: center;
  }
`;

const Big = styled.span`
  margin-top: 16px;
  font-size: 24px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
`;
