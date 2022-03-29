import { StyledButton } from './StyledButton';
import styled from 'styled-components';

const TEXT_MAX_LENGTH = 200;

export default function CardForm({ onSubmit, cards }) {
  return (
    <StyledForm onSubmit={handleSubmit} aria-labelledby="create-card" autoComplete="off" name="create">
      <h2 id="create-card"> {cards.length > 0 ? 'Erstelle eine Karte' : 'Erstelle deine erste Karte'}</h2>
      <label htmlFor="question">Gib hier deine Frage ein:</label>
      <input name="question" type="text" placeholder="z.B. Wer hat react entwickelt?" maxLength={TEXT_MAX_LENGTH} id="question" required></input>
      <label htmlFor="answer">Und hier die richtige Antwort:</label>
      <input name="answer" type="text" placeholder="z.B. Jordan Walke" maxLength={TEXT_MAX_LENGTH} id="answer" required></input>
      <Wrapper>
        <StyledButton variant="submit">Erstellen</StyledButton>
        <StyledButton>zur Liste</StyledButton>
      </Wrapper>
    </StyledForm>
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
  gap: 25px;
  font-size: 24px;
  height: 100vh;

  h2 {
    text-align: center;
  }

  input {
    background-color: #f4e9c9;
    border-radius: 30px;
    border: none;
    box-shadow: inset 0px -4px 4px rgba(0, 0, 0, 0.25);
    height: 50px;
    padding: 15px;
    margin-bottom: 50px;
    color: #8c0e03;
    font-size: 16px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
`;
