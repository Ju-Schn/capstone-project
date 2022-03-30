import styled from 'styled-components';
import StyledButton from './StyledButton';

export default function DeleteModal(showModal, onKeep, onDeleteCard) {
  console.log(showModal);
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
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 20px;
  display: grid;
  grid-template-rows: auto auto;

  background-color: #f4e9c9;
  width: 300px;
  position: fixed;
  top: 50%;
  left: 30px;

  span {
    padding: 16px;
    text-align: center;
  }
`;
