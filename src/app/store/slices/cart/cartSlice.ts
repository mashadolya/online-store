import { createSlice, current, Draft } from '@reduxjs/toolkit';
import { getCartItems, storeCartItems } from 'src/app/modules/Cart/services/cartStorage';
import { Product } from 'src/app/models/Product';
import { CartItemModel } from 'src/app/modules/Cart/models/cartItemModel';

export const CART_REDUCER = 'cart';
const INITIAL_COUNT = 0;

const INITIAL_STATE = {
  itemsInCart: (getCartItems() as CartItemModel<Product>[]) ?? ([] as CartItemModel<Product>[]),
};

export const cartSlice = createSlice({
  name: CART_REDUCER,
  initialState: INITIAL_STATE,
  reducers: {
    addItemToCart: (state, { payload }: { payload: Product }) => {
      const storedItem = findItemById(state.itemsInCart, payload.id);

      if (storedItem) {
        storedItem.count++;
        const restItems = getRestItems(state, payload.id);
        state.itemsInCart = [...restItems, storedItem];
      } else {
        const itemToStore: CartItemModel<Product> = {
          item: { ...payload },
          count: INITIAL_COUNT + 1,
        };
        state.itemsInCart.push(itemToStore);
      }
      storeCartItems(state.itemsInCart);
    },

    removeItemFromCart: (state, { payload }: { payload: Product }) => {
      const restItems = getRestItems(state, payload.id);
      state.itemsInCart = restItems;
      storeCartItems(restItems);
    },

    changeQuantity: (state, { payload }: { payload: { id: number; count: number } }) => {
      const item = findItemById(state.itemsInCart, payload.id);
      if (item) {
        item.count = payload.count;
        const restItems = getRestItems(state, payload.id);
        restItems.push(item);
        state.itemsInCart = restItems;
        storeCartItems(restItems);
      }
    },
  },
});

const getRestItems = (
  state: Draft<{ itemsInCart: CartItemModel<Product>[] }>,
  itemToExcludeId: number
) =>
  state.itemsInCart.filter((cartItem: CartItemModel<Product>) => {
    return cartItem.item.id !== itemToExcludeId;
  });

const findItemById = (itemList: CartItemModel<Product>[], id: number) =>
  itemList.find(cartItem => cartItem.item.id === id);

export const { addItemToCart, removeItemFromCart, changeQuantity } = cartSlice.actions;
export default cartSlice.reducer;
