import React, { FC } from 'react';
import * as S from 'src/app/components/controls/SearchInput/SearchInput.styles';
import { Icons } from 'src/app/components/Icons';
import { CloseButtonTypes } from 'src/app/components/icons/CloseButton/CloseButton.types';

const { Close } = Icons;

const CloseButton: FC<CloseButtonTypes> = ({ onClick, size }) => {
  return (
    <S.SearchIconButton onClick={onClick}>
      <Close width={size} height={size} />
    </S.SearchIconButton>
  );
};

export default CloseButton;
