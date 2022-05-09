import React, { FC } from 'react';
import * as S from 'src/app/components/controls/Button/Button.styles';
import { ButtonTypes } from 'src/app/components/controls/Button/Button.types';

const Button: FC<ButtonTypes> = ({ children, ...rest }) => (
  <S.ButtonContainer>
    <S.Button {...rest}>{children}</S.Button>
  </S.ButtonContainer>
);

export default Button;
