import styled from "styled-components";

export const Container = styled.div`
  padding: 25px 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2{
    font-size: 1.875rem;
  }
  p{
    font-size: 1.2rem;
    margin-bottom: 15px;
  }
`
export const ContainerForm = styled.div`
  padding-top: -35px;
  padding: 35px;
  width: 370px;
  background-color: var(--white);
`

export const Form = styled.form`
  width: 100%;
  margin-top: 4px;

  button {
    width: 100%;
    margin-top:15px;
    padding: 14px 20px;
    font-size: 1.2rem;
  }

  p {
    margin-top: 15px;
    margin-left: 35px
  }

  span {
    color: var(--green)
  }
`
export const Label = styled.div`
  display: flex;
  margin-top: 5px;
  font-weight: 500;
`