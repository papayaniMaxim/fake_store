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
export interface State {
    fetching: boolean;
    products: Product[];
    search: string;
    sort: string,
    selectedCategories: string[],
    card: Product[],
    productFetchError:{error:boolean, massage:string}
}
