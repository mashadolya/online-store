import { FC, useMemo } from 'react';
import { useAppSelector } from 'src/app/hooks/useAppSelector';
import CartItem from 'src/app/modules/Cart/components/CartItem';
import CartSummary from 'src/app/modules/Cart/components/CartSummary';
import { isEmptyArray } from 'src/utils/isEmptyArray';
import * as S from 'src/app/modules/Cart/pages/CartPage.styles';
import { getRandomInt } from 'src/utils/getRandomInt';
import { Product } from 'src/app/models/Product';
import { CartItemModel } from 'src/app/modules/Cart/models/cartItemModel';

const MAX_SHIPPING_COST = 200;
// TODO: ???
const CURRENCY = 'USD';

const CartPage: FC = () => {
  const cartItems = useAppSelector(({ cart }) => cart.itemsInCart);

  // NOTE: Just a simulation of real store behavior
  const shippingCost = useMemo(() => getRandomInt({ max: MAX_SHIPPING_COST }), []);
  const subTotalPrice = useMemo(
    () =>
      cartItems.reduce(
        (acc, { item, count }: CartItemModel<Product>) => (acc + item.price.value) * count,
        0
      ),
    [cartItems]
  );

  if (isEmptyArray(cartItems)) return <div>{'Cart is empty!'}</div>;

  return (
    <S.CartViewContainer>
      <S.CartItemsContainer>
        {cartItems.map(cartItem => (
          <CartItem key={`${cartItem.item.id} ${cartItem.count}`} cartItem={cartItem} />
        ))}
      </S.CartItemsContainer>

      <S.CartSummaryContainer>
        <CartSummary
          shippingPrice={shippingCost}
          currency={CURRENCY}
          subTotalPrice={subTotalPrice}
        />
      </S.CartSummaryContainer>
    </S.CartViewContainer>
  );
};

export default CartPage;
