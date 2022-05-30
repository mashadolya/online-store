export interface Product {
  id: number;
  label: string;
  category: string;
  price: Price;
  src: string;
  description: string;
}

interface Price {
  value: number;
  currency: string;
}
