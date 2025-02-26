import styled from "styled-components";

export const Container = styled.div`
  padding: 25px 150px;
  height: 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  background-color: var(--white);
`;

export const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  img {
    width: 300px;
  }
`;

export const Menu = styled.div`
  display: flex;
  gap: 15px;
`;

export const Button = styled.button`
  background-color: white;
  color: black;
  border: 2px solid green;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: green;
    color: white;
  }
`;
