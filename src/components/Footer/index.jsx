import React, { Fragment } from 'react'
import { Container, Copy, Item } from './styles'
import logo from "../../assets/logo.svg"
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

function Footer() {
  return (
    <Fragment>
          <Container>
        <Item>
            <img src={logo} alt="" />
            <h4>nossas redes</h4>
            <nav>
                <li><span><FaFacebook size={32}/></span></li>
                <li><span><FaInstagram size={32}/></span></li>
                <li><span><FaWhatsapp  size={32}/></span></li>
            </nav>
        </Item>
        <Item>
            <h3>Cuidados e Adoção</h3>
            <ul>
                <li><span>Adotar</span></li>
                <li><span>Cadastrar pet</span></li>
                <li><span></span></li>
            </ul>
        </Item>
        <Item>
            <h3>Seja a Diferença</h3>
            <ul>
                <li><span>Lar temporário</span></li>
                <li><span>ser parceiro</span></li>
                <li><span>ser voluntário</span></li>
            </ul>
        </Item>
        <Item>
            <h3>Descubra Mais</h3>
            <ul>
                <li><span>sobre nós</span></li>
                <li><span>nossos Projetos</span></li>
                <li><span>curiosidades</span></li>
            </ul>
        </Item>
    </Container>
       <Copy>
       <p>© Copyright 2025 - Workside Tecnologia All Rights Reserved.</p>
            <ul>
                <li><span>Termos de Uso</span></li>
                <li><span>Política de Privacidade</span></li>
                <li><span>Política de Cookies</span></li>
            </ul>
       </Copy>
    </Fragment>
  
  )
}

export default Footer