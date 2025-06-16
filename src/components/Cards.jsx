import React, { useState } from 'react';
import styled from 'styled-components';

import setaPlay from '../assets/seta_play.png';
import setaVirar from '../assets/seta_virar.png';
import iconeErro from '../assets/icone_erro.png';
import iconeQuase from '../assets/icone_quase.png';
import iconeCerto from '../assets/icone_certo.png';

const CardContainer = styled.div`
  width: 300px;
  height: 65px; 
  background-color: #FFFFFF; 
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  margin-bottom: 25px;
  position: relative;

  ${props => props.$isOpen && `
    height: unset;
    min-height: 131px;
    flex-direction: column;
    align-items: flex-start;
    padding: 18px 15px 6px 15px;
    background-color: #FFFFD4;
  `}

  
  ${props => props.$isQuestionState && ` 
    background-color: #FFFFD4;
  `}

 
  ${props => props.$isFinished && `
    height: 65px;
    flex-direction: row;
    justify-content: space-between; 
    align-items: center;
    padding: 0 15px;
    
    color: ${props.$resultColor}; 
    text-decoration: line-through; 
    background-color: #FFFFFF; 
  `}
`;

const CardText = styled.p`
  font-family: 'Recursive', sans-serif;
  font-size: 16px;
  font-weight: 700;

  ${props => props.$isQuestionState && `
    font-weight: 400;
    color: #333333; 
  `}
`;

const PlayIcon = styled.img`
  width: 20px;
  height: 23px;
`;

const FlipIcon = styled.img`
  width: 30px;
  height: 20px;
  position: absolute;
  bottom: 6px;
  right: 15px;
  cursor: pointer;
`;

const ResultIcon = styled.img`
  width: 23px;
  height: 23px;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 15px;
  width: 100%;
  justify-content: space-around;

`;

const ResultButton = styled.button`
  width: 85px;
  height: 37px;
  border-radius: 5px;
  color: #FFFFFF;
  font-family: 'Recursive', sans-serif;
  font-size: 12px;
  font-weight: 400;
  border: none;
  cursor: pointer;

  background-color: ${props => {
    if (props.$type === 'error') return '#FF3030';
    if (props.$type === 'almost') return '#FF922E';
    if (props.$type === 'correct') return '#2FBE34';
  }};
`;

const Cards = ({ questionNumber, question, answer, onCardFinished }) => {
  const [cardState, setCardState] = useState('initial');
  const [result, setResult] = useState(null); 

  const openCard = () => {
    if (cardState === 'initial') {
      setCardState('question');
    }
  };

  const flipCard = () => {
    if (cardState === 'question') {
      setCardState('answer');
    }
  };

  const finishCard = (resultType) => {
    setResult(resultType);
    setCardState('finished');
    if (onCardFinished) {
      onCardFinished(resultType);
    }
  };

  let finishedIcon = null;
  let finishedColor = '#333333'; 

  if (result === 'error') {
    finishedIcon = iconeErro;
    finishedColor = '#FF3030'; 
  } else if (result === 'almost') {
    finishedIcon = iconeQuase;
    finishedColor = '#FF922E';
  } else if (result === 'correct') {
    finishedIcon = iconeCerto;
    finishedColor = '#2FBE34'; 
  }

  return (
    <CardContainer
      $isOpen={cardState !== 'initial' && cardState !== 'finished'} 
      $isQuestionState={cardState === 'question'}
      $isFinished={cardState === 'finished'}
      $resultColor={finishedColor}
      onClick={cardState === 'initial' ? openCard : undefined}
    >
      {cardState === 'initial' && (
        <>
          <CardText>Pergunta {questionNumber}</CardText>
          <PlayIcon src={setaPlay} alt="Ícone de Play" data-test="play-btn" />
        </>
      )}

      {cardState === 'question' && (
        <>
          <CardText $isQuestionState>{question}</CardText>
          <FlipIcon src={setaVirar} alt="Ícone de virar" onClick={flipCard} data-test="turn-btn"/>
        </>
      )}

      {cardState === 'answer' && (
        <>
          <CardText>{answer}</CardText>
          <ButtonContainer>
            <ResultButton $type="error" onClick={() => finishCard('error')} data-test="no-btn">
              Não Lembrei
            </ResultButton>
            <ResultButton $type="almost" onClick={() => finishCard('almost')} data-test="partial-btn">
              Quase não Lembrei
            </ResultButton>
            <ResultButton $type="correct" onClick={() => finishCard('correct')} data-test="zap-btn">
              Lembrei!
            </ResultButton>
          </ButtonContainer>
        </>
      )}

      {cardState === 'finished' && (
        <>
          <CardText>Pergunta {questionNumber}</CardText>
          <ResultIcon src={finishedIcon} alt={`Resultado: ${result}`} data-test={result === 'error' ? "no-icon" : (result === 'almost' ? "partial-icon" : "zap-icon")}/>
        </>
      )}
    </CardContainer>
  );
};

export { Cards };