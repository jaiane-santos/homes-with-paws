import React from 'react'
import { Container, ContainerForm, Form, Label } from './styles'
import Input from "../../components/Input"
import Button from "../../components/Button"

function Login() {
  return (
   <Container>
     <h2>Acesse sua Conta</h2>
     <p>Entre com seu email e senha</p>
     <ContainerForm>
        <Form>
            <Label>Email</Label>
            <Input type="email" placeholder="Informe seu email"/>
            <Label>password</Label>
            <Input type="password" placeholder="Informe sua senha"/>
            <Button  type="submit">Entrar</Button>
        </Form>
     </ContainerForm>
   </Container>
  )
}

export default Login