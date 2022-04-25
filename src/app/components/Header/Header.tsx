import { FC } from 'react';
import NavBar from 'src/app/components/Header/components/NavBar';
import Logo from 'src/app/components/Logo';
import SearchInput from 'src/app/components/controls/SearchInput';
import * as S from 'src/app/components/Header/Header.styles';
import { CenterContainer } from 'src/app/components/Container/CenterContainer.styles';

const Header: FC = () => {
    return (
        <S.HeaderContainer className="header">
            <S.HeaderBorder className="header-border">
                <CenterContainer />
            </S.HeaderBorder>

            <CenterContainer>
                <S.HeaderContent>
                    <Logo />
                    <SearchInput />
                    <NavBar />
                </S.HeaderContent>
            </CenterContainer>

            <S.HeaderBorder />
        </S.HeaderContainer>
    );
};

export default Header;
