import { Order, Product } from "../interface/interfaces"

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const START_FETCHING = 'START_FETCHING'
export const ADD_FETCH_PRODUCTS = 'ADD_FETCH_PRODUCTS'
export const END_FETCHING = 'END_FETCHING'
export const SEARCH_WAS_CHANGE = 'SEARCH_WAS_CHANGE'
export const SORT_WAS_CHANGE = 'SORT_WAS_CHANGE'
export const CATEGORY_WAS_CHANGE = 'CATEGORY_WAS_CHANGE'
export const ADD_TO_CARD = "ADD_TO_CARD"
export const DELETE_FROM_CARD = "DELETE_FROM_CARD"
export const PRODUCT_FETCHING_ERROR = "PRODUCT_FETCHING_ERROR"
export const START_SENDING_ORDER = 'START_SENDING_ORDER'
export const PENDING_SENDING_ORDER = 'PENDING_SENDING_ORDER'
export const FULLFILLED_SENDING_ORDER = 'FULLFILLED_SENDING_ORDER'
export const REJECTED_SENDING_ORDER = 'REJECTED_SENDING_ORDER'
export const CLEAN_CARD = 'CLEAN_CARD'
export const GREETING_WAS_SHOWED = 'GREETING_WAS_SHOWED'
export const CARD_PRODUCT_ITEM_COUNT_WAS_CHANGED = 'CARD_PRODUCT_ITEM_COUNT_WAS_CHANGED'

export const incrementAction = {
    type: INCREMENT,
}

export const decrementAction = {
    type: DECREMENT,
}

export const startFethingProductAction = {
    type: START_FETCHING
}

export const endFethingProductAction = {
    type: END_FETCHING
}

export function addFetchProductsAction(products:Product[]) {
    return {
        type: ADD_FETCH_PRODUCTS,
        products
    }
}

export function searchChangedAction(search:string) {
    return {
        type: SEARCH_WAS_CHANGE,
        search
    }
}

export function sortChangedAction(sort:string) {
    return {
        type: SORT_WAS_CHANGE,
        sort
    }
}

export function categoryChangedAction(category:string) {
    return {
        type: CATEGORY_WAS_CHANGE,
        category
    }
}

export function addToCard(product: Product) {
    return {
        type: ADD_TO_CARD,
        product
    }
}

export function deleteFromCard(id: number) {
    return {
        type: DELETE_FROM_CARD,
        id
    }
}

export function productFetchingError(massage: string) {
    return {
        type: PRODUCT_FETCHING_ERROR,
        massage
    }
}

export const startSendingOrderAction = {
    type: START_SENDING_ORDER,
}

export const fullfilledSendingOrderAction = {
    type: FULLFILLED_SENDING_ORDER,
}

export const rejectedSendingOrderAction = {
    type: REJECTED_SENDING_ORDER,
}

export const cleanCardAction = {
    type: CLEAN_CARD,
}

export const pendingSendingOrderAction = {
    type: PENDING_SENDING_ORDER,
}

export const greetingWasShowedAction = {
    type: GREETING_WAS_SHOWED
}

export function cardProductCoutnChangeAction(product:Product, count: number) {
    return {type: CARD_PRODUCT_ITEM_COUNT_WAS_CHANGED, order:{product, count}}
}