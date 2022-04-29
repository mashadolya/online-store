export interface Product {
    id: string;
    label: string;
    category: string;
    price: Price;
    src: string;
}

interface Price {
    value: string;
    currency: string;
}
