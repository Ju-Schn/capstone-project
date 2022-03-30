import styled from 'styled-components';

export default function Card({ question, answer }) {
  return (
    <FileCard>
      <h2>Frage: </h2>
      <span>{question}</span>
      <h2>Antwort: </h2>
      <span>{answer}</span>
    </FileCard>
  );
}

const FileCard = styled.section`
  background-color: #f4e9c9;
  color: #000;
  font-size: 24px;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0 30px 30px 30px;

  h2 {
    margin-top: 24px;
  }

  span {
    margin-top: 16px;
  }
`;
