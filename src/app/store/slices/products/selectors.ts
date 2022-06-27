import { useAppSelector } from 'src/app/store/hooks/useAppSelector';

export const selectAvailableProducts = () =>
  useAppSelector(({ products }) => products.availableProducts);
