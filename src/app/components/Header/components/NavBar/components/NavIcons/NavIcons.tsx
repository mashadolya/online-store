import * as S from 'src/app/components/Header/components/NavBar/components/NavIcons/NavIcons.styles';
import { Icons } from 'src/app/components/Icons';
import RouterLink from 'src/app/components/controls/RouterLink';
import { RoutePaths } from 'src/app/routes/routes';
import React, { useCallback } from 'react';
import { useAppSelector } from 'src/app/hooks/useAppSelector';

const { Cart, Profile, Favorite } = Icons;

const ICON_SIZE = 32;

// TODO: Move to constants
const MAX_RENDERED_ITEM_COUNT = 9;

const NavIcons = () => {
    const itemsInCartCount = useAppSelector(state => state.cart.itemsInCart)?.length;

    const calculateItemsInCart = useCallback(
        () =>
            itemsInCartCount >= MAX_RENDERED_ITEM_COUNT
                ? `${MAX_RENDERED_ITEM_COUNT}+`
                : `${itemsInCartCount}`,
        [itemsInCartCount]
    );

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
                    {itemsInCartCount > 0 && <span>{calculateItemsInCart()}</span>}
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
