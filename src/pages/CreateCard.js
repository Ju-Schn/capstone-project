import StyledButton from '../components/StyledButton';
import styled from 'styled-components';
import FormNavigation from '../components/navigations/FormNavigation';
import FormModal from '../components/modals/FormModal';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function CreateCard({
  onFormClick,
  onPinnedClick,
  onSubmit,
  cards,
  onAddCard,
  onGoOn,
  // showFormModal,
}) {
  const navigate = useNavigate();
  const TEXT_MAX_LENGTH = 200;

  const [showFormModal, setShowFormModal] = useState(false);
  return (
    <>
      <Header id="create-card">
        {cards.length > 0
          ? 'Erstelle eine Karte'
          : 'Erstelle deine erste Karte!'}
      </Header>
      <FormWrapper>
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
          <StyledButton variant="submit">Erstellen</StyledButton>
        </StyledForm>
        {showFormModal && (
          <FormModal /*onAddCard={handleAddCard}*/ onGoOn={handleGoOn} />
        )}
        <FormNavigation
          onHomeClick={handleHomeClick}
          onFormClick={handleFormClick}
          // onPinnedClick={handlePinnedClick}
        />
      </FormWrapper>
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

  function handleHomeClick(prop) {
    // const form = document.getElementsByTagName('form')
    console.log(prop);
    const questionInput = document.getElementById('question');
    const questionText = questionInput.value.trim();
    const answerInput = document.getElementById('answer');
    const answerText = answerInput.value.trim();
    console.log(questionText + answerText);
    if (questionText && answerText) {
      setShowFormModal(true);
      // onAddCard(questionText, answerText);
      onGoOn(prop);
      // form.reset()
    } else navigate(prop);
  }

  function handleFormClick(prop) {
    // const form = document.getElementsByTagName('form')
    const questionInput = document.getElementById('question');
    const questionText = questionInput.value.trim();
    const answerInput = document.getElementById('answer');
    const answerText = answerInput.value.trim();
    if (questionText && answerText) {
      onFormClick(questionText, answerText);
      onAddCard(questionText, answerText);
      // onGoOn(prop);
      // form.reset()
    }
  }

  // function handlePinnedClick(prop) {
  //   const questionInput = document.getElementById('question');
  //   const questionText = questionInput.value.trim();
  //   const answerInput = document.getElementById('answer');
  //   const answerText = answerInput.value.trim();
  //   if (questionText && answerText) {
  //     onPinnedClick(questionText, answerText);
  //     onAddCard(questionText, answerText);
  //     onGoOn(prop);

  //   }
  //}

  function handleGoOn(prop) {
    setShowFormModal(false);
    navigate(prop);
  }

  // function handleAddCard(questionText, answerText) {
  //   onAddCard(questionText, answerText);
  //   setShowFormModal(false);
  // }
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
  grid-template-rows: auto 48px;
  height: 85vh;
`;

const Header = styled.h2`
  text-align: center;
  margin: 16px 0;
  font-size: 32px;
`;
