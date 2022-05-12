import React from 'react';
import { CartItemModel } from 'src/app/modules/Cart/models/cartItemModel';
import { Product } from 'src/app/models/Product';
import Image from 'src/app/components/Image';
import * as S from 'src/app/modules/Cart/components/CartItem/CartItem.styles';

const CartItem = ({ cartItem }: { cartItem: CartItemModel<Product> }) => {
  const { src, label } = cartItem.item;

  return (
    <S.CartItemContainer>
      <div>{label}</div>
      <div>{cartItem.count} count</div>
    </S.CartItemContainer>
  );
};

export default CartItem;
