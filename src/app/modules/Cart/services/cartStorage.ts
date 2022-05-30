import { Product } from 'src/app/models/Product';
import { STORAGE_KEYS } from 'src/app/constants/storageConstants';
import { getData, storeData } from 'src/localStorage/storageActions';
import { CartItemModel } from 'src/app/modules/Cart/models/cartItemModel';

const { CART_ITEMS } = STORAGE_KEYS;

export const getCartItems = () => getData(CART_ITEMS);

export const storeCartItems = (items: CartItemModel<Product>[]) => {
  storeData(CART_ITEMS, [...items]);
};
