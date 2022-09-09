export interface Rating {
    rate: number;
    count: number;
}
export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

export interface Order {
    product: Product,
    count: number,
}

export interface State {
    fetching: boolean;
    products: Product[];
    search: string;
    sort: string,
    selectedCategories: string[],
    card: Order[],
    productFetchError: { error: boolean, massage: string }
    sendingOrderStatus: string,
    greetingWasShowed: boolean,
    orders: Order[],
}

