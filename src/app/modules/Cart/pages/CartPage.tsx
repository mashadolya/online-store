import React, { FC } from 'react';
import { useAppSelector } from 'src/app/hooks/useAppSelector';
import CartItem from 'src/app/modules/Cart/components/CartItem/CartItem';
import { isEmptyArray } from 'src/utils/isEmptyArray';
import * as S from 'src/app/modules/Cart/pages/CartPage.styles';

const CartPage: FC = () => {
  const itemsInCartCount = useAppSelector(({ cart }) => cart.itemsInCart);

  if (isEmptyArray(itemsInCartCount)) return <div>{'Cart is empty!'}</div>;

  return (
    <S.CartContainer>
      <S.CartItemsContainer>
        {itemsInCartCount.map(cartItem => (
          <CartItem key={`${cartItem.item.id} ${cartItem.count}`} cartItem={cartItem} />
        ))}
      </S.CartItemsContainer>
      <S.CartSummaryContainer>Cart Summary info</S.CartSummaryContainer>
    </S.CartContainer>
  );
};

export default CartPage;
