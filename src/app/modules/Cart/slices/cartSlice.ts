import { createSlice, current } from '@reduxjs/toolkit';
import { Product } from 'src/app/models/Product';
import { getCartItems, storeCartItems } from 'src/app/modules/Cart/services/cartStorage';

export const CART_REDUCER_NAME = 'cart';

const INITIAL_STATE = {
    itemsInCart: (getCartItems() as Product[]) ?? ([] as Product[]),
};

export const cartSlice = createSlice({
    name: CART_REDUCER_NAME,
    initialState: INITIAL_STATE,
    reducers: {
        addItemToCart: (state, { payload }: { payload: Product }) => {
            const itemToStore = {
                ...payload,
                count: 1,
            };

            const storedItem = state.itemsInCart.find(x => x.id === payload.id);
            if (storedItem) {
                storedItem.count++;
                const restItems = state.itemsInCart.filter((item: Product) => {
                    return item.id !== item.id;
                });
                state.itemsInCart = [...restItems, storedItem];
            } else {
                state.itemsInCart.push(itemToStore);
            }

            storeCartItems(state.itemsInCart);
            console.log(current(state).itemsInCart);
        },
        removeItemFromCart: (state, { payload }: { payload: Product }) => {
            state.itemsInCart.filter(item => item.id !== payload.id);
        },
    },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
