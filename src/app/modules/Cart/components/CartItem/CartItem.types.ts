import { CartItemModel } from 'src/app/modules/Cart/models/cartItemModel';
import { Product } from 'src/app/models/Product';

export interface CartItemTypes {
  cartItem: CartItemModel<Product>;
}
