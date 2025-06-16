import React, { useState } from 'react';
import styled from 'styled-components';
import { Header } from './Header';
import { DeckCards } from './DeckCards';
import { Footer } from './Footer';

const Background = styled.div`
  background-color: #EF868B;
  width: 100vw;
  height: 100vh; 
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative; 
`;

const Home = () => {
  const [completedCardsCount, setCompletedCardsCount] = useState(0);
  
  const questionsData = [ 
    { id: 1, question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript que permite escrever HTML dentro do JavaScript." },
    { id: 2, question: "O React é _______", answer: "uma biblioteca JavaScript de código aberto para construir interfaces de usuário." },
    { id: 3, question: "Componentes devem iniciar com letra ______", answer: "maiúscula, pois são classes ou funções JavaScript que retornam elementos React." },
    { id: 4, question: "Podemos colocar ______ no JSX", answer: "expressões JavaScript dentro de chaves { }." },
  ];

  const totalCardsInDeck = questionsData.length; 

  const handleCardFinished = () => { 
    setCompletedCardsCount(prevCount => prevCount + 1);
  };

  return (
    <Background>
      <Header />
      <DeckCards onFlashcardFinished={handleCardFinished} questions={questionsData} />
      <Footer completedCount={completedCardsCount} totalCount={totalCardsInDeck} />
    </Background>
  );
};

export { Home };