import React, { Fragment } from 'react'
import { Container, Description, Left, Profile, ProfileContact, ProfileDescriptin, ProfileFormContact, ProfileImg, Right, Thumb } from './styles'
import TopBanner from '../../components/TopBanner'
import topbanner from '../../assets/topbanner.jpg'

function ipet() {
  return (
    <Fragment>
      <TopBanner />
      <Container>
        <Left>
          <Thumb>
            <img src={topbanner} alt="" />
          </Thumb>
          <Description>
            <h2>Nome pet</h2>
            <p>Cachorro</p>
            <p><span>Descrição: </span>The point of using Lorem I</p>
            <p><span>Raça:</span> RND<span> /  Cor:</span> Caramelo / <span>Idade:</span>4 anos / <span>Sexo: </span>Feminino</p>
            <p>Castrado(a): </p>
            <p><span>Endereço:</span></p>
          </Description>
        </Left>
        <Right>
          <Profile>
            <ProfileImg>
               <img src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" alt="" />          
            </ProfileImg>
            <ProfileDescriptin>
              <h3>Jhon Due</h3>
              <p>teste@teste.com</p>
            </ProfileDescriptin>
          </Profile>
          <ProfileContact>
            <h3>Informações para Contato</h3>
            <p>(456) 6547-6445</p>
            <p>(456) 6547-6445</p>
            <p>teste@teste.com</p>
          </ProfileContact>
          <ProfileFormContact>
            <h3>Contate nossa ong</h3>
            <form>
              <input name="name" required placeholder="Nome" />
              <input type="email" name="" required id="" placeholder="email" />
              <textarea name="" id="" required placeholder="Digite sua mensagem..."></textarea>
              <button type="submit">Enviar Mensagem</button>
            </form>
          </ProfileFormContact>
        </Right>
       
     </Container>
    </Fragment>
  
  )
}

export default ipet