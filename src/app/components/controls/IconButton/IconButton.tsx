import React, { FC } from 'react';
import * as S from 'src/app/components/controls/IconButton/IconButton.styles';
import { IconButtonTypes } from 'src/app/components/controls/IconButton/IconButton.types';

const IconButton: FC<IconButtonTypes> = ({ onClick, children }) => {
    return (
        <S.IconButtonWrapper onClick={onClick}>
            <S.Icon>{children}</S.Icon>
        </S.IconButtonWrapper>
    );
};

export default IconButton;
