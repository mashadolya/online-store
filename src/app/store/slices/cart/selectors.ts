import { useAppSelector } from 'src/app/store/hooks/useAppSelector';

export const selectItemsInCart = () => useAppSelector(state => state.cart.itemsInCart);
