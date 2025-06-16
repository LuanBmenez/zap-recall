import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  min-height: 70px; /* Altura mínima do footer, ajuste conforme necessário */
  background-color: #FFFFFF; /* Fundo branco */
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05); /* Sombra superior */
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  padding: 10px 0; /* Espaçamento interno superior e inferior */
  position: fixed; /* Fixa o footer na parte inferior da tela */
  bottom: 0; /* Alinha na parte inferior */
  left: 0; /* Alinha à esquerda */
`;

const FooterText = styled.p`
  font-family: 'Recursive', sans-serif; 
  font-size: 18px;
  font-weight: 400; 
  color: #333333;
`;

const Footer = ({ completedCount, totalCount }) => {
  return (
    <FooterContainer>
      <FooterText>{completedCount}/{totalCount} CONCLUÍDOS</FooterText>
    </FooterContainer>
  );
};

export { Footer };