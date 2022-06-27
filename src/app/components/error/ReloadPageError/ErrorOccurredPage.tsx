import React, { FC } from 'react';
import * as S from 'src/app/components/error/ReloadPageError/ReloadPageError.styles';
import { ERROR_MESSAGES } from 'src/app/constants/errorMessages';

const RELOAD_PAGE_TEXT = 'Reload this page';

const ErrorOccurredPage: FC = () => {
  return (
    <S.ErrorCardContainer>
      <S.ErrorCard>
        <p>
          {`${ERROR_MESSAGES.LOADING_PAGE} `}
          <S.ErrorLink onClick={window.location.reload}>{`${RELOAD_PAGE_TEXT} `}</S.ErrorLink>
        </p>
      </S.ErrorCard>
    </S.ErrorCardContainer>
  );
};

export default ErrorOccurredPage;
