import { SyntheticEvent } from 'react';
import { useAppDispatch } from 'src/app/hooks/useAppDispatch';
import { addItemToCart, removeItemFromCart } from 'src/app/store/slices/cart/cartSlice';
import { Product } from 'src/app/models/Product';

export const useCartActions = (product: Product) => {
  const dispatch = useAppDispatch();

  const dispatchItem = (e: SyntheticEvent, action: any) => {
    e.stopPropagation();
    dispatch(action);
  };

  const removeItem = (e: SyntheticEvent) => {
    dispatchItem(e, removeItemFromCart(product));
  };

  const addItem = (e: SyntheticEvent) => {
    dispatchItem(e, addItemToCart(product));
  };

  return { removeItem, addItem };
};
