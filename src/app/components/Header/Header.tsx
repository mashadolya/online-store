import { FC } from 'react';
import NavBar from 'src/app/components/Header/components/NavBar';
import Logo from 'src/app/components/Logo';
import SearchInput from 'src/app/components/controls/SearchInput';
import * as S from 'src/app/components/Header/Header.styles';
import { CenterContainer } from 'src/app/components/containers/CenterContainer.styles';

const Header: FC = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderBorder>
        <CenterContainer />
      </S.HeaderBorder>

      <CenterContainer>
        <S.HeaderContent>
          <S.HeaderItemContainer>
            <Logo />
          </S.HeaderItemContainer>
          <S.HeaderIconsContainer>
            <SearchInput />
            <NavBar />
          </S.HeaderIconsContainer>
        </S.HeaderContent>
      </CenterContainer>

      <S.HeaderBorder />
    </S.HeaderContainer>
  );
};

export default Header;
