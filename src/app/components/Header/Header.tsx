import React from 'react';
import { IconsGroup } from 'app/components/Header/components/IconsGroup/IconsGroup';
import Logo from 'app/components/Logo';
import * as S from 'app/components/Header/Header.styles';
import { ContainerStyled } from 'app/components/Container/Container.styles';
import UserMenu from 'app/components/Header/components/UserMenu/UserMenu';
import { SearchInput } from 'app/components/controls/SearchInput/SearchInput';

function Header() {
    return (
        <S.HeaderContainerStyled className="header">
            <S.HeaderBorder>
                <UserMenu />
            </S.HeaderBorder>
            <ContainerStyled>
                <S.HeaderStyles>
                    <Logo />
                    <SearchInput />
                    <IconsGroup />
                </S.HeaderStyles>
            </ContainerStyled>
            <S.HeaderBorder />
        </S.HeaderContainerStyled>
    );
}

export default Header;
