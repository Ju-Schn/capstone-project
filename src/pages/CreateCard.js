import StyledButton from '../components/StyledButton';
import styled from 'styled-components';
import FormNavigation from '../components/navigations/FormNavigation';
import FormModal from '../components/modals/FormModal';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Input from '../components/Input';

export default function CreateCard({ cards, onAddNewCard }) {
  const [showFormModal, setShowFormModal] = useState(false);
  const [values, setValues] = useState({
    question: '',
    answer: '',
    category1: '',
    category2: '',
    category3: '',
  });
  const [page, setPage] = useState('');

  const navigate = useNavigate();
  const TEXT_MAX_LENGTH = 200;
  const CATEGORY_MAX_LENGTH = 20;
  const initalValues = {
    question: '',
    answer: '',
    category1: '',
    category2: '',
    category3: '',
  };

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
        <Input
          htmlFor="question"
          onChange={handleChange}
          name="question"
          type="text"
          placeholder="z.B. Wer hat react entwickelt?"
          maxLength={TEXT_MAX_LENGTH}
          id="question"
          required
          value={values.question}
          labelText={'Gib hier deine Frage ein:'}
        />
        <Input
          htmlFor="answer"
          onChange={handleChange}
          name="answer"
          type="text"
          placeholder="z.B. Jordan Walke"
          maxLength={TEXT_MAX_LENGTH}
          id="answer"
          required
          value={values.answer}
          labelText={'Und hier die richtige Antwort:'}
        />
        <Input
          htmlFor="category1"
          onChange={handleChange}
          name="category1"
          type="text"
          id="category1"
          placeholder="z.B. react"
          required
          value={values.category1}
          maxLength={CATEGORY_MAX_LENGTH}
          labelText={'Gib hier eine Kategorie ein:'}
        ></Input>
        <Input
          htmlFor="category2"
          onChange={handleChange}
          name="category2"
          type="text"
          id="category2"
          placeholder="z.B. javascript"
          value={values.category2}
          maxLength={CATEGORY_MAX_LENGTH}
          labelText={
            'Hier kannst du eine zweite Kategorie eingeben (freiwillig):'
          }
        ></Input>
        <Input
          htmlFor="category3"
          onChange={handleChange}
          name="category3"
          type="text"
          id="category3"
          placeholder="z.B. coding"
          value={values.category3}
          maxLength={CATEGORY_MAX_LENGTH}
          labelText={'Und hier eine dritte (freiwillig):'}
        ></Input>
        <StyledButton variant="submitSticky">Erstellen</StyledButton>
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
    const category1Text = values.category1.trim();
    const category2Text = values.category2.trim();
    const category3Text = values.category3.trim();
    if (questionText && answerText && category1Text) {
      onAddNewCard(
        questionText,
        answerText,
        category1Text,
        category2Text,
        category3Text
      );
      setValues(initalValues);
    }
  }

  function handleAddCard() {
    const questionText = values.question;
    const answerText = values.answer;
    const category1Text = values.category1;
    const category2Text = values.category2;
    const category3Text = values.category3;
    onAddNewCard(
      questionText,
      answerText,
      category1Text,
      category2Text,
      category3Text
    );
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
    const category1Text = values.category1.trim();
    if (questionText && answerText && category1Text) {
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
  gap: 8px;
  font-size: 20px;
  margin: 0 16px;
  overflow-y: auto;
`;

const FormWrapper = styled.div`
  display: grid;
  grid-template-rows: 48px auto 87px;
  height: 100vh;
`;

const Header = styled.h2`
  text-align: center;
  font-size: 32px;
`;
