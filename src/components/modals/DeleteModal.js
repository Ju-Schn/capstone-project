import styled from 'styled-components';
import StyledButton from '../StyledButton';

export default function DeleteModal({ onKeepConfirm, onDeleteConfirm }) {
  return (
    <BackgroundModal>
      <GridModal>
        <span>Möchtest du die Karte wirklich löschen?</span>
        <span>
          <StyledButton variant={'submit'} onClick={onKeepConfirm}>
            Behalten
          </StyledButton>
          <StyledButton variant={'danger'} onClick={onDeleteConfirm}>
            Löschen
          </StyledButton>
        </span>
      </GridModal>
    </BackgroundModal>
  );
}

const BackgroundModal = styled.div`
  background-color: rgba(140, 14, 3, 0.8);
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
  width: 300px;
  top: 25%;
  left: 3%;

  span {
    padding: 16px;
    text-align: center;
  }
`;
