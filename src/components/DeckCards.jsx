import styled from 'styled-components';
import { Cards } from './Cards';

const DeckContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0; 
  width: 100%;
`;

const DeckCards = ({ onFlashcardFinished, questions }) => { 

  return (
    <DeckContainer>
      {questions.map((q, index) => (
        <Cards
          key={q.id}
          questionNumber={index + 1}
          question={q.question}
          answer={q.answer}
          onCardFinished={onFlashcardFinished}
        />
      ))}
    </DeckContainer>
  );
};

export { DeckCards };