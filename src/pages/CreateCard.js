import StyledButton from '../components/StyledButton';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import ScreenReaderOnly from '../components/ScreenReaderOnly';

export default function CreateCard({ onSubmit, cards }) {
  const TEXT_MAX_LENGTH = 200;
  return (
    <>
      <StyledForm
        onSubmit={handleSubmit}
        aria-labelledby="create-card"
        autoComplete="off"
        name="create"
      >
        <h2 id="create-card">
          {cards.length > 0
            ? 'Erstelle eine Karte'
            : 'Erstelle deine erste Karte!'}
        </h2>
        <FlexWrapper>
          <label htmlFor="question">Gib hier deine Frage ein:</label>
          <StyledButton variant="submit">
            <ScreenReaderOnly>Erstellen</ScreenReaderOnly>
            <svg
              fill="#f4e9c9"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="40px"
              height="40px"
            >
              <path d="M 25 2 C 12.317 2 2 12.317 2 25 C 2 37.683 12.317 48 25 48 C 37.683 48 48 37.683 48 25 C 48 20.44 46.660281 16.189328 44.363281 12.611328 L 42.994141 14.228516 C 44.889141 17.382516 46 21.06 46 25 C 46 36.579 36.579 46 25 46 C 13.421 46 4 36.579 4 25 C 4 13.421 13.421 4 25 4 C 30.443 4 35.393906 6.0997656 39.128906 9.5097656 L 40.4375 7.9648438 C 36.3525 4.2598437 30.935 2 25 2 z M 43.236328 7.7539062 L 23.914062 30.554688 L 15.78125 22.96875 L 14.417969 24.431641 L 24.083984 33.447266 L 44.763672 9.046875 L 43.236328 7.7539062 z" />
            </svg>
          </StyledButton>
        </FlexWrapper>
        <input
          name="question"
          type="text"
          placeholder="z.B. Wer hat react entwickelt?"
          maxLength={TEXT_MAX_LENGTH}
          id="question"
          required
        />
        <label htmlFor="answer">Und hier die richtige Antwort:</label>
        <input
          name="answer"
          type="text"
          placeholder="z.B. Jordan Walke"
          maxLength={TEXT_MAX_LENGTH}
          id="answer"
          required
        />
      </StyledForm>
      <Navigation variant="notFixed" />
    </>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const questionText = form.elements.question.value.trim();
    const answerText = form.elements.answer.value.trim();
    if (questionText && answerText) {
      onSubmit(questionText, answerText);
      form.reset();
    }
  }
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 20px;
  margin: 0 16px;
  height: auto;

  h2 {
    text-align: center;
    margin-top: 16px;
    font-size: 24px;
  }

  input {
    background-color: #f4e9c9;
    border-radius: 30px;
    border: none;
    box-shadow: inset 0px -4px 4px rgba(0, 0, 0, 0.25);
    height: 50px;
    padding: 15px;
    margin-bottom: 16px;
    color: #8c0e03;
    font-size: 16px;
    font-family: inherit;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
