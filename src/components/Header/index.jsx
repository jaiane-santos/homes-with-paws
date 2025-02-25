import React from 'react'
import logo from "../../assets/logo.svg"
import { Container, Logo, Menu } from './styles'

const Header = () => {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="Logo com a palavra 'Lares' em verde com estilo em negrito, acompanhada de um coração verde à sua direita. Abaixo, em uma fonte menor e também em verde, a frase 'com Patinhas'. O fundo é branco." />
      </Logo>
      <Menu>
        <ul>
          <li><span>Cadastro / Login</span></li>
        </ul>
      </Menu>
    </Container>
  )
}

export default Header