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

export interface userInfo {
    login?: boolean | undefined,
    firstName?: string ,
    lastName?: string ,
    tel?: string ,
    email?: string ,
    uid?: string ,
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
    userInfo?: userInfo,
}