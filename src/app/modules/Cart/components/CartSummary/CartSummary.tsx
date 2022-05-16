import { FC, useMemo } from 'react';
import { CartSummaryTypes } from 'src/app/modules/Cart/components/CartSummary/CartSummary.types';
import * as S from 'src/app/modules/Cart/components/CartSummary/CartSummary.styles';

const CartSummary: FC<CartSummaryTypes> = ({ subTotalPrice, shippingPrice, currency }) => {
  const totalPrice = useMemo(() => subTotalPrice + shippingPrice, [subTotalPrice, shippingPrice]);
  const applyCurrency = (value: number) => `${currency} ${value.toFixed(2)}`;

  return (
    <S.CartSummaryContainer>
      <S.Row>Summary</S.Row>
      <S.Row>
        <div>Subtotal</div>
        <div>{applyCurrency(totalPrice)}</div>
      </S.Row>
      <S.Row>
        <div> Estimated Shipping & Handling</div>
        <div>{applyCurrency(shippingPrice)}</div>
      </S.Row>
      <S.Total>
        <div>Total</div>
        <div>{applyCurrency(totalPrice)}</div>
      </S.Total>
    </S.CartSummaryContainer>
  );
};

export default CartSummary;
