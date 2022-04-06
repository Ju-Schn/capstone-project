import StyledButton from '../components/StyledButton';
import styled from 'styled-components';
import FormNavigation from '../components/navigations/FormNavigation';
import FormModal from '../components/modals/FormModal';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function CreateCard({ cards, onAddNewCard }) {
  const [showFormModal, setShowFormModal] = useState(false);
  const [values, setValues] = useState({ question: '', answer: '' });
  const [page, setPage] = useState('');

  const navigate = useNavigate();
  const TEXT_MAX_LENGTH = 200;
  const initalValues = { question: '', answer: '' };

  return (
    <FormWrapper>
      <Header id="create-card">
        {cards.length > 0
          ? 'Erstelle eine Karte'
          : 'Erstelle deine erste Karte!'}
      </Header>
      <StyledForm
        onSubmit={handleSubmit}
        aria-labelledby="create-card"
        autoComplete="off"
        name="create"
      >
        <FlexWrapper>
          <label htmlFor="question">Gib hier deine Frage ein:</label>
        </FlexWrapper>
        <input
          onChange={handleChange}
          name="question"
          type="text"
          placeholder="z.B. Wer hat react entwickelt?"
          maxLength={TEXT_MAX_LENGTH}
          id="question"
          required
          value={values.question}
        />
        <label htmlFor="answer">Und hier die richtige Antwort:</label>
        <input
          onChange={handleChange}
          name="answer"
          type="text"
          placeholder="z.B. Jordan Walke"
          maxLength={TEXT_MAX_LENGTH}
          id="answer"
          required
          value={values.answer}
        />
        <StyledButton variant="submit">Erstellen</StyledButton>
      </StyledForm>
      {showFormModal && (
        <FormModal onAddNewCard={handleAddCard} onDiscard={handleDiscard} />
      )}
      <FormNavigation onNavClick={handleNavigation} />
    </FormWrapper>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const questionText = values.question.trim();
    const answerText = values.answer.trim();
    if (questionText && answerText) {
      onAddNewCard(questionText, answerText);
      setValues(initalValues);
    }
  }

  function handleAddCard() {
    const questionText = values.question;
    const answerText = values.answer;
    onAddNewCard(questionText, answerText);
    setValues(initalValues);
    setShowFormModal(false);
    navigate(page);
  }

  function handleChange(event) {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  function handleNavigation(path) {
    const questionText = values.question.trim();
    const answerText = values.answer.trim();
    if (questionText && answerText) {
      setShowFormModal(true);
      setPage(path);
    } else navigate(path);
  }

  function handleDiscard() {
    setShowFormModal(false);
    setValues(initalValues);
    navigate(page);
  }
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  font-size: 20px;
  margin: 0 16px;

  input {
    background-color: #f4e9c9;
    border-radius: 30px;
    border: none;
    box-shadow: inset 0px -4px 4px rgba(0, 0, 0, 0.25);
    height: 50px;
    padding: 15px;
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

const FormWrapper = styled.div`
  display: grid;
  gap: 32px;
  grid-template-rows: 48px auto 48px;
  height: 100vh;
`;

const Header = styled.h2`
  text-align: center;
  margin: 16px 0;
  font-size: 32px;
`;
