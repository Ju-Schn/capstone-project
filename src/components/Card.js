import styled, { css } from 'styled-components';
import ScreenReaderOnly from './ScreenReaderOnly';
import StyledButton from './StyledButton';
import useToggle from '../hooks/useToggle';

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
  showCounts,
  onClickRight,
  onClickWrong,
}) {
  const [solution, toggleSolution] = useToggle(false);

  return (
    <FileCard
      isPinned={isPinned}
      countWrong={countWrong}
      countRight={countRight}
      showCounts={showCounts}
      variant={isPinned ? 'pinned' : 'default'}
    >
      {solution && (
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
      )}
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
      <StyledButton onClick={toggleSolution} variant="showHide">
        {solution ? (
          <svg
            fill="#f4e9c9"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="32px"
            height="32px"
          >
            <path d="M 16 6.59375 L 15.28125 7.28125 L 2.78125 19.78125 L 4.21875 21.21875 L 16 9.4375 L 27.78125 21.21875 L 29.21875 19.78125 L 16.71875 7.28125 Z" />
          </svg>
        ) : (
          <svg
            fill="#f4e9c9"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="32px"
            height="32px"
          >
            <path d="M 4.21875 10.78125 L 2.78125 12.21875 L 15.28125 24.71875 L 16 25.40625 L 16.71875 24.71875 L 29.21875 12.21875 L 27.78125 10.78125 L 16 22.5625 Z" />
          </svg>
        )}
        <ScreenReaderOnly>
          {solution ? 'Antwort verbergen' : 'Antwort anzeigen'}
        </ScreenReaderOnly>
      </StyledButton>
      <>
        {solution ? (
          <>
            <ScreenReaderOnly>
              <h2>Antwort: </h2>
            </ScreenReaderOnly>
            <span>{answer}</span>
            <FlexWrapper>
              <StyledButton onClick={() => onClickRight(_id)} variant="right">
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
                <span>{countRight}</span>
              </StyledButton>
              <StyledButton onClick={() => onClickWrong(_id)} variant="wrong">
                <ScreenReaderOnly>Falsch</ScreenReaderOnly>
                <span>{countWrong}</span>
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
          </>
        ) : (
          ''
        )}
      </>
      <StyledButton variant="noButtonTrash" onClick={() => onTrashClick(_id)}>
        <svg
          width="24"
          height="28"
          viewBox="0 0 24 28"
          fill="#D92B04"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.8657 1.52185L19.376 3.04242C21.3607 3.77839 22.7138 4.88554 22.7138 6.40355C22.7138 9.48181 17.1594 10.8808 12.0006 10.8808C6.84057 10.8808 1.28873 9.48181 1.28873 6.40355C1.28873 4.77546 2.84809 3.62095 5.07502 2.88883L5.57504 1.3977C2.42668 2.22582 0 3.80015 0 6.40227V9.30006C0 10.8667 0.88278 12.0583 2.26816 12.9415L2.77721 24.8001C2.77721 26.5665 6.99651 28 12.2004 28C17.4043 28 21.6249 26.5665 21.6249 24.8001L22.1468 12.6497C23.2873 11.7998 24 10.7042 24 9.30006V6.40099C24.0026 3.92174 21.7963 2.37941 18.8657 1.52185ZM6.3225 25.0433C5.70907 24.6773 5.00542 23.9605 4.81985 23.46C3.5221 19.9274 3.87907 17.1627 4.13682 13.8477C5.10079 14.2061 6.17301 14.4774 7.29421 14.6707C7.01713 18.0728 6.74005 20.9718 7.29936 24.6901C7.38442 25.2379 6.93465 25.4068 6.32379 25.0446L6.3225 25.0433ZM14.2173 25.3019C14.1915 25.8702 13.3255 26.3962 12.261 26.3962C11.1939 26.3962 10.3305 25.8676 10.306 25.298C10.1436 21.4633 10.2647 18.4862 10.3936 15.0073C10.9323 15.0368 11.4697 15.056 11.9994 15.056C12.6978 15.056 13.4118 15.0304 14.1258 14.9792C14.2546 18.4734 14.3783 21.4557 14.216 25.3006L14.2173 25.3019ZM19.7021 23.4613C19.5178 23.9631 18.8129 24.6773 18.2007 25.0421C17.5911 25.4056 17.1491 25.234 17.2303 24.6888C17.7935 20.9386 17.5061 18.0229 17.2239 14.5824C18.3579 14.3597 19.425 14.0486 20.3684 13.648C20.6287 17.0527 21.0256 19.8583 19.7034 23.4626L19.7021 23.4613ZM6.63824 6.33699C6.96315 6.4434 7.31724 6.41795 7.62333 6.26619C7.92942 6.11443 8.16271 5.84865 8.27235 5.52679H8.26977L9.26209 2.56116H15.1387L16.1336 5.52551C16.2427 5.84685 16.4753 6.11229 16.7808 6.26384C17.0862 6.4154 17.4396 6.44078 17.7638 6.33443C17.9246 6.28148 18.0732 6.19758 18.2013 6.08753C18.3294 5.97748 18.4344 5.84343 18.5103 5.69306C18.5861 5.54269 18.6314 5.37894 18.6436 5.21116C18.6557 5.04339 18.6344 4.8749 18.5809 4.7153L17.2896 0.87548C17.2044 0.621336 17.041 0.400154 16.8225 0.243093C16.604 0.0860314 16.3414 0.0010076 16.0717 0H8.33679C7.78521 0 7.29034 0.351984 7.11507 0.8742L5.82634 4.71403C5.60082 5.38472 5.96553 6.10916 6.63824 6.33443V6.33699Z"
            fill="#D92B04"
          />
        </svg>
        <ScreenReaderOnly>Lösche diese Karte</ScreenReaderOnly>
      </StyledButton>
    </FileCard>
  );
}

const FileCard = styled.section`
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
