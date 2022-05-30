import { FC } from 'react';
import * as S from 'src/app/modules/Cart/components/CartItem/CartItem.styles';
import { Icons } from 'src/app/components/Icons';
import IconButton from 'src/app/components/controls/IconButton';
import { useCartActions } from 'src/app/modules/Cart/hooks/useCartActions';
import { CartItemTypes } from 'src/app/modules/Cart/components/CartItem/CartItem.types';

const { Favorite, Trash } = Icons;

const ICON_SIZE = 20;

const CartItem: FC<CartItemTypes> = ({ cartItem }) => {
  const { removeItem } = useCartActions(cartItem.item);

  const {
    src,
    label,
    description,
    price: { value, currency },
  } = cartItem.item;

  return (
    <S.CartItemContainer>
      <S.CartItemImageContainer>
        <S.CartImage src={src} alt={label} />
      </S.CartItemImageContainer>

      <S.CartItemBodyContainer>
        <S.CartItemInfoContainer>
          <S.CartItemDescription>
            <a>{label}</a>
            <div>{description}</div>
            <div>
              {value} {currency}
            </div>
          </S.CartItemDescription>
          <div>{cartItem.count} count</div>
        </S.CartItemInfoContainer>
        <S.CartItemActionsContainer>
          <IconButton>
            <Favorite width={ICON_SIZE} height={ICON_SIZE} />
          </IconButton>
          <IconButton>
            <Trash width={ICON_SIZE} height={ICON_SIZE} onClick={e => removeItem(e)} />
          </IconButton>
        </S.CartItemActionsContainer>
      </S.CartItemBodyContainer>
    </S.CartItemContainer>
  );
};

export default CartItem;
