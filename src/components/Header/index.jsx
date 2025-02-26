import React from 'react';
import logo from "../../assets/logo.svg";
import { Container, Logo, Menu, Button } from './styles';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Container>
      <Logo>
        <Link to="/"> 
          <img 
            src={logo} 
            alt="Logo com a palavra 'Lares' em verde com estilo em negrito, acompanhada de um coração verde à sua direita. Abaixo, em uma fonte menor e também em verde, a frase 'com Patinhas'. O fundo é branco." 
          /> 
        </Link>
      </Logo>

      <Menu>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
        <Link to="/cadastro">
          <Button>Cadastre-se</Button>
        </Link>
      </Menu>
    </Container>
  );
};

export default Header;
