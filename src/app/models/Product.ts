export interface Product {
    id: string;
    label: string;
    category: string;
    price: Price;
    src: string;
    count: number;
  description: string;
}

interface Price {
  value: string;
  currency: string;
}
