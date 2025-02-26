import styled from "styled-components";
import error from "../../assets/error404.png"

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--primary);
  text-align: center;
  font-family: "Arial, sans-serif";
`;

export const ErrorImage = styled.div`
  width: 500px;
  height: 350px;
  background: url(${error}) no-repeat center;
  background-size: contain;
  margin-bottom: 20px;
  margin-top: -130px;
`;

export const ErrorMessage = styled.h1`
  font-size: 24px;
  color: #2e7d32;
  margin-bottom: 10px;
`;

export const ErrorDescription = styled.p`
  font-size: 18px;
  color: #1b5e20;
`;

export const BackButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: var(--green);
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #2e7d32;
  }
`;
