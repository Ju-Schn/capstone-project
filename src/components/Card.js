import styled, { css } from 'styled-components';
import ScreenReaderOnly from './ScreenReaderOnly';
import StyledButton from './StyledButton';
import { useState } from 'react';
import { ReactComponent as TrashcanRedIcon } from '../svgs/trashcanRed.svg';
import { ReactComponent as RotateIcon } from '../svgs/drehen.svg';
import ReactCardFlip from 'react-card-flip';

export default function Card({
  question,
  answer,
  onTrashClick,
  _id,
  onPinClick,
  isPinned,
  categories,
  countRight,
  countWrong,
  onCountRight,
  onCountWrong,
}) {
  const [isAnswer, toggleAnswer] = useState(false);
  const [showCounts, setShowCounts] = useState(false);

  return (
    <ReactCardFlip
      isFlipped={isAnswer}
      flipDirection="horizontal"
      flipSpeedBackToFront={1}
      flipSpeedFrontToBack={1}
    >
      <FileCardFront
        isPinned={isPinned}
        countWrong={countWrong}
        countRight={countRight}
        showCounts={showCounts}
        variant={isPinned ? 'pinned' : 'default'}
      >
        <ScreenReaderOnly>
          <h2>Frage: </h2>
        </ScreenReaderOnly>
        <span>{question}</span>
        <ScreenReaderOnly>
          <span>Kategorien:</span>
        </ScreenReaderOnly>
        <CategoryWrapper role="list">
          {categories?.map((category, index) =>
            category ? (
              <Category key={`${category}-${index}`}>{category}</Category>
            ) : (
              ''
            )
          )}
        </CategoryWrapper>
        <StyledButton onClick={handleFlipToBackClick} variant="showHide">
          <RotateIcon />
          <ScreenReaderOnly>
            {isAnswer ? 'Antwort verbergen' : 'Antwort anzeigen'}
          </ScreenReaderOnly>
        </StyledButton>
        <StyledButton variant="noButtonTrash" onClick={() => onTrashClick(_id)}>
          <TrashcanRedIcon />
          <ScreenReaderOnly>Lösche diese Karte</ScreenReaderOnly>
        </StyledButton>
      </FileCardFront>
      <FileCardBack
        isPinned={isPinned}
        countWrong={countWrong}
        countRight={countRight}
        showCounts={showCounts}
        variant={isPinned ? 'pinned' : 'default'}
        _id={_id}
      >
        <StyledButton variant="noButtonPin" onClick={() => onPinClick(_id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 26 26"
            width="32px"
            height="32px"
            fill={isPinned ? '#415E02' : '#8c0e03'}
          >
            <g id="surface14398506">
              <path d="M 18.9375 0.21875 C 18.582031 0.148438 18.113281 0.382812 17.78125 0.8125 L 13.09375 7.40625 C 10.394531 6.640625 7.347656 7.308594 5.21875 9.4375 L 16.5625 20.75 C 18.71875 18.597656 19.378906 15.539062 18.5625 12.8125 L 18.59375 12.78125 L 25.1875 8.28125 C 25.769531 7.847656 25.980469 7.199219 25.625 6.84375 L 19.25 0.40625 C 19.164062 0.316406 19.054688 0.242188 18.9375 0.21875 Z M 18.9375 3.21875 L 20.6875 4.9375 L 16.21875 9 L 15.1875 8.03125 Z M 13.03125 9.28125 C 13.195312 9.28125 13.28125 9.3125 13.28125 9.3125 L 14.28125 10.28125 C 14.28125 10.28125 13.601562 10.371094 11.5625 12.40625 L 9.78125 10.625 C 11.34375 9.460938 12.539062 9.285156 13.03125 9.28125 Z M 8.625 14.78125 L 0.21875 25.78125 L 11.1875 17.34375 Z M 8.625 14.78125 " />
            </g>
          </svg>
          <ScreenReaderOnly>Pinne diese Karte</ScreenReaderOnly>
        </StyledButton>
        <ScreenReaderOnly>
          <h2>Antwort: </h2>
        </ScreenReaderOnly>
        <span>{answer}</span>
        <CategoryWrapper role="list">
          {categories?.map((category, index) =>
            category ? (
              <Category key={`${category}-${index}`}>{category}</Category>
            ) : (
              ''
            )
          )}
        </CategoryWrapper>
        <StyledButton onClick={handleFlipToFrontClick} variant="showHide">
          <RotateIcon />
          <ScreenReaderOnly>
            {isAnswer ? 'Antwort verbergen' : 'Antwort anzeigen'}
          </ScreenReaderOnly>
        </StyledButton>
        <FlexWrapper>
          <StyledButton onClick={() => handleClickRight(_id)} variant="right">
            <ScreenReaderOnly>Richtig</ScreenReaderOnly>
            <svg
              fill="#f4e9c9"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="35px"
              height="35px"
            >
              <path d="M 25 2 C 12.317 2 2 12.317 2 25 C 2 37.683 12.317 48 25 48 C 37.683 48 48 37.683 48 25 C 48 20.44 46.660281 16.189328 44.363281 12.611328 L 42.994141 14.228516 C 44.889141 17.382516 46 21.06 46 25 C 46 36.579 36.579 46 25 46 C 13.421 46 4 36.579 4 25 C 4 13.421 13.421 4 25 4 C 30.443 4 35.393906 6.0997656 39.128906 9.5097656 L 40.4375 7.9648438 C 36.3525 4.2598437 30.935 2 25 2 z M 43.236328 7.7539062 L 23.914062 30.554688 L 15.78125 22.96875 L 14.417969 24.431641 L 24.083984 33.447266 L 44.763672 9.046875 L 43.236328 7.7539062 z" />
            </svg>
            {showCounts && <span>{countRight}</span>}
          </StyledButton>
          <StyledButton onClick={() => handleClickWrong(_id)} variant="wrong">
            <ScreenReaderOnly>Falsch</ScreenReaderOnly>
            {showCounts && <span>{countWrong}</span>}
            <svg
              fill="#f4e9c9"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="35px"
              height="35px"
            >
              <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z" />
            </svg>
          </StyledButton>
        </FlexWrapper>
        <StyledButton variant="noButtonTrash" onClick={() => onTrashClick(_id)}>
          <TrashcanRedIcon />
          <ScreenReaderOnly>Lösche diese Karte</ScreenReaderOnly>
        </StyledButton>
      </FileCardBack>
    </ReactCardFlip>
  );

  function handleFlipToBackClick(event) {
    event.preventDefault();
    toggleAnswer(!isAnswer);
  }

  function handleFlipToFrontClick(event) {
    event.preventDefault();
    toggleAnswer(!isAnswer);
    setShowCounts(false);
  }

  function handleClickRight(_id) {
    console.log('--' + _id);
    setShowCounts(true);
    onCountRight(_id);
  }

  function handleClickWrong(_id) {
    setShowCounts(true);
    onCountWrong(_id);
  }
}

const FileCardFront = styled.section`
  background-color: #f4e9c9;
  color: #000;
  font-size: 24px;
  border-radius: 30px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 350px;
  padding: 16px 16px 8px 32px;
  word-wrap: break-word;

  ${props =>
    props.variant === 'pinned' &&
    css`
      background-color: #ffc105;
    `};
`;
const FileCardBack = styled.section`
  background-color: #f4e9c9;
  color: #000;
  font-size: 24px;
  border-radius: 30px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 350px;
  padding: 16px 16px 8px 32px;
  word-wrap: break-word;

  ${props =>
    props.variant === 'pinned' &&
    css`
      background-color: #ffc105;
    `};
`;

const CategoryWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-size: 16px;
  padding: 0;
  list-style: none;
  gap: 16px;
  margin-top: 8px;
`;

const Category = styled.li`
  background-color: rgb(217, 121, 4, 0.5);
  border-radius: 30px;
  padding: 8px;
  max-width: 95%;
  word-wrap: break-word;
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
