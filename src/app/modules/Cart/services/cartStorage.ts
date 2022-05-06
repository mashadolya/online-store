import { getData, storeData } from 'src/localStorage/storeActions';
import { Product } from 'src/app/models/Product';
import { STORAGE_KEYS } from 'src/app/constants/storageConstants';

const { CART_ITEMS } = STORAGE_KEYS;

export interface ProductFromStore extends Product {
    count: number;
}

export const getCartItems = () => getData(CART_ITEMS);

const findItemById = (
    item: Product,
    storedItems: ProductFromStore[]
): ProductFromStore | undefined => {
    return storedItems.find(({ id }) => id === item.id);
};

export const storeCartItem1 = (item: Product) => {
    const storedItems = getCartItems();

    if (storedItems !== null) {
        const isItemInStore = findItemById(item, storedItems);
        if (isItemInStore) {
            const restItems = storedItems.filter((item: ProductFromStore) => {
                return item.id != item.id;
            });
            const newArr = [...restItems, item];
            console.log(newArr);
            storeData(CART_ITEMS, [...restItems, item]);
        }
    } else {
        storeData(CART_ITEMS, [item]);
    }
};

export const storeCartItems = (items: Product[]) => {
    storeData(CART_ITEMS, [...items]);
};
