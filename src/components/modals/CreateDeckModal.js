import StyledButton from '../StyledButton';

import styled from 'styled-components';

export default function CreateDeckModal({
  onChangeFilterClick,
  onCreateCardClick,
}) {
  return (
    <BackgroundModal>
      <GridModal>
        <span> Du hast nicht genug Karten in den ausgewählten Kategorien.</span>
        <ButtonWrapper>
          <StyledButton variant="yellow" onClick={onChangeFilterClick}>
            Ändere deine Filtereinstellungen
          </StyledButton>
          <StyledButton variant="submit" onClick={onCreateCardClick}>
            Erstelle mehr Karten
          </StyledButton>
        </ButtonWrapper>
      </GridModal>
    </BackgroundModal>
  );
}

const BackgroundModal = styled.div`
  background-color: rgba(217, 121, 4, 0.8);
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
  width: 350px;

  span {
    padding: 16px;
    text-align: center;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 16px; ;
`;
