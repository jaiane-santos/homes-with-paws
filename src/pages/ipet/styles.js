import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center; 
  align-items: stretch;  
  min-height: 100vh;  
`;

export const Left = styled.div`
  width: 50%;
  padding: 10px;
  border: 1px solid rgb(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column; 
`;

export const Thumb = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
`;

export const Description = styled.div`
  padding: 30px 0;
  h2, p {
    margin-bottom: 15px;
    color: var(--secondary);
  }
`;

export const Right = styled.div`
  width: 28%;
  padding: 10px;
  border: 1px solid rgb(0, 0, 0, 0.1);
  border-radius: 5px;
  display: flex;
  flex-direction: column;  
`;

export const Profile = styled.div`
  display: flex;
`;

export const ProfileImg = styled.div`
  width: 115px;
  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
`;

export const ProfileDescriptin = styled.div`
  h3, p {
    margin-left: 20px;
    color: var(--secondary);
  }

  h3 {
    margin-top: 20px;
  }

  p {
    margin-left: 25px;
    font-size: 15px;
    color:rgb(141, 139, 139);
  }
`;

export const ProfileContact = styled.div`
  h3, p {
    margin-bottom: 15px;
    color: var(--secondary);
  }

  h3 {
    margin-top: 2rem;
  }
`;

export const ProfileFormContact = styled.div`
  h3 {
    margin-top: 2rem;
    margin-bottom: 10px;
    color: var(--secondary);
  }

    form {
    max-width: 500px;
    margin: 0 auto;
    background-color: var(--white);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  
`;
