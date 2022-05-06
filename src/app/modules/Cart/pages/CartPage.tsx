import React, { FC } from 'react';
import { useAppSelector } from 'src/app/hooks/useAppSelector';
import CartItem from 'src/app/modules/Cart/components/CartItem/CartItem';

const CartPage: FC = () => {
    const itemsInCartCount = useAppSelector(({ cart }) => cart.itemsInCart);

    if (!itemsInCartCount) return null;

    return (
        <div>
            {itemsInCartCount.map(item => (
                <CartItem key={`${item.id} ${item.count}`} item={item} />
            ))}
        </div>
    );
};

export default CartPage;
