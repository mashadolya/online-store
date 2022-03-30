import React from 'react';
import { Cart, ProfileIcon } from 'app/components/Icons';
import * as S from 'app/components/Header/components/IconsGroup/IconsGroup.styles';

export function IconsGroup() {
    return (
        <S.ItemsWrapper>
            <ProfileIcon />
            <Cart />
        </S.ItemsWrapper>
    );
}
