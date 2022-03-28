import { StyledButton } from './StyledButton';
import styled from 'styled-components';

export default function CardForm() {
  return (
    <form>
      <label>Gib hier deine Frage ein:</label>
      <input></input>
      <label>Und hier deine Antwort:</label>
      <input></input>
      <StyledButton />
    </form>
  );
}
