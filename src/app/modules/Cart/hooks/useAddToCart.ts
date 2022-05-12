import { useAppDispatch } from 'src/app/hooks/useAppDispatch';
import { SyntheticEvent } from 'react';
import { Product } from 'src/app/models/Product';
import { addItemToCart } from 'src/app/store/slices/cart/cartSlice';

export const useAddToCart = (product: Product) => {
  const dispatch = useAppDispatch();

  const addItem = (e: SyntheticEvent) => {
    e.stopPropagation();

    dispatch(addItemToCart(product));
  };

  return [addItem];
};
