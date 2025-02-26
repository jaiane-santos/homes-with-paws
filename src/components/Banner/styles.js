import styled from "styled-components";
import banner from "../../assets/banner.jpg"

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 70vh; 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; 
  background-image: url(${banner});
  
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 97%;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: -1;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 2; 
  padding: 70px 150px;
  width: 100%;
`;

export const Text = styled.div`
  h2 {
    color: var(--white);
    font-size: 56px;
    font-weight: 700;
    width: 50%;
    margin-bottom: 12px;
  }
  p {
    color: var(--white);
    margin-bottom: 95px;
  }

  span {
    background-color: var(--green);
    border: 0;
    color: var(--white);
    font-size: 18px;
    font-weight: 600;
    padding: 10px 70px;
    line-height: 24px;
    border-radius: 3px;
    cursor: pointer;
  }
  
  span:hover {
    background-color: rgba(13, 98, 13, 0.96); 
    cursor: pointer;
  }
`;
