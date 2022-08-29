import { State } from "../interface/interfaces";
import { ADD_FETCH_PRODUCTS, ADD_TO_CARD, CATEGORY_WAS_CHANGE, CLEAN_CARD, DELETE_FROM_CARD, END_FETCHING, FULLFILLED_SENDING_ORDER, PENDING_SENDING_ORDER, PRODUCT_FETCHING_ERROR, REJECTED_SENDING_ORDER, SEARCH_WAS_CHANGE, SORT_WAS_CHANGE, START_FETCHING, START_SENDING_ORDER, } from "./actions";

const initialState = {
    products: [],
    fetching: false,
    search: '',
    selectedCategories: [],
    card: [],
    sort: '',
    productFetchError: { error: false, massage: '' },
    sendingOrderStatus: "PENDING"
}

export const reducer = (state:State = initialState , action: any) => {
    switch (action.type) {
        
        case START_FETCHING:
            return { ...state, fetching: true }
        
        case END_FETCHING:
            return { ...state, fetching: false }
        
        case PRODUCT_FETCHING_ERROR:
            return { ...state, productFetchError: { error: true, massage: action.massage } }
        
        case ADD_FETCH_PRODUCTS:
            return { ...state, products: action.products }
        
        case SEARCH_WAS_CHANGE:
            return { ...state, search: action.search }
        
        case SORT_WAS_CHANGE:
            return { ...state, sort: action.sort }
        
        case CATEGORY_WAS_CHANGE:
            let selectedCategories = [...state.selectedCategories]
            if (selectedCategories.includes(action.category)) {
                selectedCategories = selectedCategories.filter(category => category !== action.category)
            } else {
                selectedCategories.push(action.category)
            }
            return { ...state, selectedCategories: selectedCategories }
        
        case ADD_TO_CARD:
            let product = { ...action.product }
            product.id = Math.random()
            return { ...state, card: [...state.card, product] }
        
        case DELETE_FROM_CARD:
            return { ...state, card: [...state.card].filter(product => product.id !== action.id) }
        
        case CLEAN_CARD:
            return {...state, card: []}
        
        case START_SENDING_ORDER:
            return { ...state, sendingOrderStatus: 'IN_PROCESS' }
        
        case FULLFILLED_SENDING_ORDER:
            return { ...state, sendingOrderStatus: 'FULLFILLED' }
        
        case REJECTED_SENDING_ORDER:
            return {...state, sendingOrderStatus:'REJECTED'}
        
        case PENDING_SENDING_ORDER:
            return {...state, sendingOrderStatus:'PENDING'}
        
        default: return state
    }
}