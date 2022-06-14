import { useEffect } from 'react';
import { getDatabase, onValue, ref } from 'firebase/database';
import { Product } from 'src/app/models/Product';
import { useAppDispatch } from 'src/app/store/hooks/useAppDispatch';
import { saveProducts } from 'src/app/store/slices/products/productsSlise';
import { selectAvailableProducts } from 'src/app/store/slices/products/selectors';

const REF_NAME = 'products';

export const useProducts = (): Product[] => {
  const dispatch = useAppDispatch();
  const products = selectAvailableProducts();

  useEffect(() => {
    const db = getDatabase();
    const productsRef = ref(db, REF_NAME);

    onValue(productsRef, snapshot => {
      dispatch(saveProducts(snapshot.val()));
    });
  }, []);

  return products;
};
