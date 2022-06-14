import { Product } from 'src/app/models/Product';
import { getData, storeData } from 'src/localStorage/storageActions';
import { CartItemModel } from 'src/app/modules/Cart/models/cartItemModel';
import { STORAGE_KEYS } from 'src/localStorage/storageKeys';
import { removeItem } from 'src/localStorage/localStorage';
import { isEmptyArray } from 'src/utils/isEmptyArray';

const { CART_ITEMS } = STORAGE_KEYS;

export const getCartItems = () => getData(CART_ITEMS);

export const storeCartItems = (items: CartItemModel<Product>[]) => {
  if (isEmptyArray(items)) {
    removeItem(CART_ITEMS);
    return;
  }
  storeData(CART_ITEMS, [...items]);
};
