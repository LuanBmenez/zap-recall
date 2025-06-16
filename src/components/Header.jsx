import styled from 'styled-components';
import logo from "../assets/logo.png";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center; 
  padding: 20px; 
  justify-content: center; 
  width: 100%; 
  box-sizing: border-box; 
`;

const Logo = styled.img`
  width: 52px; 
  height: 60px; 
  margin-right: 15px;
`;

const Title = styled.h1`
  font-family: 'Righteous', cursive; 
  font-size: 36px;
  color: #FFFFFF; 
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo ZapRecall" />
      <Title>ZapRecall</Title>
    </HeaderContainer>
  );
};

export { Header };