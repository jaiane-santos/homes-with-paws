import React from "react";
import banner from "../../assets/banner.webp"
import {
  Container,
  Description,
  Img,
  Itens
} from "./styles";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const Card = () => {
  return (
    <Container>
      <Img>
        <img src={banner} alt="" />
      </Img>
      <Description>
        <h4>nome</h4>
        <Itens>
          <span>pet (gato, cão, coelho)</span>
          {/* <span>raça</span>
          <span>idade</span>
          <span>castrado ou não</span>
          <span>femea ou macho</span> */}
        </Itens>
        <Link to="/detalhes">Detalhes <FaArrowRight /></Link>
      </Description>
    </Container>
  )
}

export default Card;