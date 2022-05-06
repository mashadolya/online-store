import React from 'react';
import { ProductFromStore } from 'src/app/modules/Cart/services/cartStorage';

const CartItem = ({ item }: { item: ProductFromStore }) => {
    console.log(item);
    return (
        <>
            <div>
                {item.label}
                <span>{item.count}</span>
            </div>
        </>
    );
};

export default CartItem;
