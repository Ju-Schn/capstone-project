import { StyledButton } from './StyledButton';
import styled from 'styled-components';

export default function CardForm() {
  return (
    <StyledForm aria-labelledby="createCard">
      <h2 id="createCard">Erstelle eine Karte</h2>
      <label htmlFor="question">Gib hier deine Frage ein:</label>
      <input id="question"></input>
      <label htmlFor="answer">Und hier die richtige Antwort:</label>
      <input id="answer"></input>
      <StyledButton variant="submit" children="Erstellen" />
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;

  font-size: 32px;

  input {
    background-color: #f4e9c9;
    border-radius: 30px;
    border: none;
    box-shadow: inset 0px -4px 4px rgba(0, 0, 0, 0.25);
    height: 50px;
    margin-bottom: 50px;
  }
`;
