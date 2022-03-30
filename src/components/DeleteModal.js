import styled from 'styled-components';
import StyledButton from './StyledButton';

export default function DeleteModal({ showModal, onKeep, onDeleteCard }) {
  return (
    <>
      {showModal === true ? (
        <GridModal>
          <span>Möchtest du die Karte wirklich löschen?</span>
          <span>
            <StyledButton
              variant={'submit'}
              children={'Behalten'}
              onClick={onKeep}
            ></StyledButton>
            <StyledButton
              variant={'danger'}
              children={'Löschen'}
              onClick={onDeleteCard}
            ></StyledButton>
          </span>
        </GridModal>
      ) : null}
    </>
  );
}

const GridModal = styled.section`
  border-radius: 30px;
  box-shadow: rgba(140, 14, 3, 0.4) 0px 22px 400px 800px;
  display: grid;
  grid-template-rows: auto auto;
  background-color: #f4e9c9;
  width: 300px;
  position: absolute;
  top: 25%;
  left: 3%;

  span {
    padding: 16px;
    text-align: center;
  }
`;
