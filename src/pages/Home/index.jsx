import React, { Fragment } from 'react'
import { Header, Wrapper } from './styles'
import Card from '../../components/Card'
import Banner from "../../components/Banner"

function Home() {
  let Cards = [];
  for(let i = 0; i < 4; i++ ){
     Cards.push(<Card key={i} />)
  }

  return (
    <Fragment>
       <Banner />
     <Header>
        <h2>Pronto para Adoção 🐾</h2>
     </Header>
     <Wrapper>
       {Cards}
     </Wrapper>
    </Fragment>
  )
}

export default Home