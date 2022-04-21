import ScreenReaderOnly from './ScreenReaderOnly';
import StyledButton from './StyledButton';
import { ReactComponent as TrashcanRedIcon } from '../svgs/trashcanRed.svg';
import { ReactComponent as RotateIcon } from '../svgs/drehen.svg';
import { ReactComponent as RightIcon } from '../svgs/richtig.svg';
import { ReactComponent as WrongIcon } from '../svgs/falsch.svg';
import { ReactComponent as PinIcon } from '../svgs/pin.svg';

import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import styled, { css } from 'styled-components';
import { toast } from 'react-toastify';

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
  onCountRights,
  onCountWrongs,
  quotient,
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
        showCounts={showCounts}
        variant={isPinned ? 'pinned' : 'default'}
        quotient={quotient}
      >
        <ScreenReaderOnly>
          {isPinned ? 'gepinnte Karte' : 'nicht gepinnt'}
        </ScreenReaderOnly>
        <ScreenReaderOnly>
          <h2>Frage: </h2>
        </ScreenReaderOnly>
        <span>{question}</span>
        <ScreenReaderOnly>
          <span>Kategorien:</span>
        </ScreenReaderOnly>
        <CategoryWrapper role="list">
          {categories.map(
            (category, index) =>
              category && (
                <Category key={`${category}-${index}`}>{category}</Category>
              )
          )}
        </CategoryWrapper>
        <StyledButton onClick={handleFlipToBackClick} variant="showHide">
          <RotateIcon />
          <ScreenReaderOnly>Antwort anzeigen</ScreenReaderOnly>
        </StyledButton>
        <StyledButton variant="noButtonTrash" onClick={() => onTrashClick(_id)}>
          <TrashcanRedIcon />
          <ScreenReaderOnly>Lösche diese Karte</ScreenReaderOnly>
        </StyledButton>
      </FileCardFront>
      <FileCardBack
        isPinned={isPinned}
        showCounts={showCounts}
        variant={isPinned ? 'pinned' : 'default'}
        _id={_id}
        quotient={quotient}
      >
        <ScreenReaderOnly>
          {isPinned ? 'gepinnte Karte' : 'nicht gepinnt'}
        </ScreenReaderOnly>
        <StyledButton variant="noButtonPin" onClick={() => onPinClick(_id)}>
          <PinIcon fill={isPinned ? '#415E02' : '#8c0e03'} />
          <ScreenReaderOnly>Pinne diese Karte</ScreenReaderOnly>
        </StyledButton>
        <ScreenReaderOnly>
          <h2>Antwort: </h2>
        </ScreenReaderOnly>
        <span>{answer}</span>
        <CategoryWrapper role="list">
          {categories.map(
            (category, index) =>
              category && (
                <Category key={`${category}-${index}`}>{category}</Category>
              )
          )}
        </CategoryWrapper>
        <StyledButton onClick={handleFlipToFrontClick} variant="showHide">
          <RotateIcon />
          <ScreenReaderOnly>Antwort verbergen</ScreenReaderOnly>
        </StyledButton>
        <FlexWrapper>
          <StyledButton onClick={() => handleClickRight(_id)} variant="right">
            <ScreenReaderOnly>Richtig</ScreenReaderOnly>
            <RightIcon />
            {showCounts && <span>{Math.round(countRight)}</span>}
          </StyledButton>
          <StyledButton onClick={() => handleClickWrong(_id)} variant="wrong">
            <ScreenReaderOnly>Falsch</ScreenReaderOnly>
            {showCounts && <span>{Math.round(countWrong)}</span>}
            <WrongIcon />
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
    setShowCounts(true);
    onCountRights(_id);
    toast.success('Yay! Richtig geantwortet! 🎈');
  }

  function handleClickWrong(_id) {
    setShowCounts(true);
    onCountWrongs(_id);
    toast.error('Bleib dran! Übung macht den Meister 📚🤓');
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
  width: 325px;
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
  width: 325px;
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
  justify-content: space-evenly;
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
