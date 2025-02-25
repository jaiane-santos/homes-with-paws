import React from "react";
import { Container, Content, Text } from "./styles";

const Banner = () => {
  return (
    <Container>
          <Content> 
             <Text>
                 <h2>Adote com Amor, Transforme uma Vida!</h2>
                 <p>
                 Dê um lar cheio de carinho para um pet que precisa de você. <br/>
                 A adoção responsável salva vidas e enche a sua de amor incondicional.
                 Encontre seu novo melhor amigo hoje!
                 </p>
                 <span>Cadastre-se</span>
              </Text>
          </Content> 
    </Container>
  )
}

export default Banner;
