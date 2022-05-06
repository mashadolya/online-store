export interface Product {
    id: string;
    label: string;
    category: string;
    price: Price;
    src: string;
    count: number;
}

interface Price {
    value: string;
    currency: string;
}
