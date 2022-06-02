import React, { FC } from 'react';
import * as S from 'src/app/components/error/ReloadPageError/ReloadPageError.styles';
import { AN_ERROR_IN_LOADING_PAGE } from 'src/app/constants/errorMessages';

const RELOAD_PAGE = 'Reload this page';

const ReloadPageError: FC = () => {
  return (
    <S.ErrorCardContainer>
      <S.ErrorCard>
        <p>
          {AN_ERROR_IN_LOADING_PAGE}{' '}
          <S.ErrorLink
            onClick={() => {
              window.location.reload();
            }}
          >
            {RELOAD_PAGE}
          </S.ErrorLink>{' '}
        </p>
      </S.ErrorCard>
    </S.ErrorCardContainer>
  );
};

export default ReloadPageError;
