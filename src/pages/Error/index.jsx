import React from 'react'
import { BackButton, ErrorContainer, ErrorDescription, ErrorImage, ErrorMessage } from './styles';

function Error() {
    return (
        <ErrorContainer>
          <ErrorImage />
          <ErrorMessage>Oops! Algo deu errado...</ErrorMessage>
          <ErrorDescription>
            Não se preocupe, volte para a página inicial e tente novamente.
          </ErrorDescription>
          <BackButton>Voltar</BackButton>
        </ErrorContainer>
      );
    };

export default Error