import styled from "styled-components";
import topbanner from '../../assets/topbanner.jpg'

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; 
  background-image: url(${topbanner}); 

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);  
    z-index: -1;
  }
`;



export const Text = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 150px;
  position: relative;
  z-index: 1;
  h2 {
    color: var(--white);
    padding-top: 130px;
    font-size: 56px;
    font-weight: 700;
    width: 50%;
    margin-bottom: 1px;
  }
  p{
    color: var(--white);
  }
`