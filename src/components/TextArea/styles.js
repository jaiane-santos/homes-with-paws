import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    padding: 12px;
    margin: 8px 0;
    border: 2px solid #ccc;
    border-radius: 6px;
    font-size: 16px;
    transition: border-color 0.3s;
    resize: none;
 

   &:focus {
    border-color: #4CAF50;
    outline: none;
  }
`