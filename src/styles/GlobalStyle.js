import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box; /* Garante que padding e border sejam incluídos na largura/altura */
    font-family: 'Recursive', sans-serif; /* Define uma fonte padrão global se não for feito em outro lugar */
  }

  #root { /* Onde seu aplicativo React é montado */
    width: 100vw;
    min-height: 100vh;
    display: flex; /* Garante que o #root também seja um flex container para o Home */
    flex-direction: column;
    align-items: center;
    background-color: #EF868B; /* Garante que o fundo principal esteja no root */
  }
`;

export default GlobalStyle;