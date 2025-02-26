import React from 'react'
import { Container, ContainerForm, Form, Label } from './styles'
import Input from "../../components/Input"
import Button from "../../components/Button"

function Cadastro() {
  return (
   <Container>
     <h2>Criar Conta</h2>
     <p>Cadastre-se para acessar a plataforma</p>
     <ContainerForm>
        <Form>
            <Label>userName</Label>
             <Input type="text" placeholder="Informe seu nome"/>
            <Label>Email</Label>
            <Input type="email" placeholder="Informe seu email"/>
            <Label>password</Label>
            <Input type="password" placeholder="Crie sua senha"/>
            <Button  type="submit">Cadastrar</Button>
        </Form>
     </ContainerForm>
   </Container>
  )
}

export default Cadastro