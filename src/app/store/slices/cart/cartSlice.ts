import { createSlice, Draft } from '@reduxjs/toolkit';
import { getCartItems, storeCartItems } from 'src/app/modules/Cart/services/cartStorage';
import { Product } from 'src/app/models/Product';
import { CartItemModel } from 'src/app/modules/Cart/models/cartItemModel';

export const CART_REDUCER_NAME = 'cart';
const INITIAL_COUNT = 0;

const INITIAL_STATE = {
  itemsInCart: (getCartItems() as CartItemModel<Product>[]) ?? ([] as CartItemModel<Product>[]),
};

export const cartSlice = createSlice({
  name: CART_REDUCER_NAME,
  initialState: INITIAL_STATE,
  reducers: {
    addItemToCart: (state, { payload }: { payload: Product }) => {
      const storedItem = state.itemsInCart.find(cartItem => cartItem.item.id === payload.id);

      if (storedItem) {
        storedItem.count++;
        const restItems = getRestItems(state, payload);
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
      const restItems = getRestItems(state, payload);
      state.itemsInCart = restItems;
      storeCartItems(restItems);
    },
  },
});

const getRestItems = (state: Draft<{ itemsInCart: CartItemModel<Product>[] }>, payload: Product) =>
  state.itemsInCart.filter((cartItem: CartItemModel<Product>) => {
    return cartItem.item.id !== payload.id;
  });

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
