import * as S from 'src/app/components/Header/components/NavBar/components/NavIcons/NavIcons.styles';
import { Icons } from 'src/app/components/Icons';
import RouterLink from 'src/app/components/controls/RouterLink';
import { RoutePaths } from 'src/app/routes/routes';
import React from 'react';

const { Cart, Profile, Favorite } = Icons;

const ICON_SIZE = 32;

const NavIcons = () => {
  return (
    <S.ItemsWrapper>
      <RouterLink to={RoutePaths.FAVORITE}>
        <S.ItemWrapper>
          <Favorite width={ICON_SIZE} height={ICON_SIZE} />
        </S.ItemWrapper>
      </RouterLink>
      <RouterLink to={RoutePaths.CART}>
        <S.ItemWrapper>
          <Cart width={ICON_SIZE} height={ICON_SIZE} />
        </S.ItemWrapper>
      </RouterLink>
      <RouterLink to={RoutePaths.PROFILE}>
        <S.ItemWrapper>
          <Profile width={ICON_SIZE} height={ICON_SIZE} />
        </S.ItemWrapper>
      </RouterLink>
    </S.ItemsWrapper>
  );
};

export default NavIcons;
