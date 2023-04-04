import { CART_ADD_ITEM } from "./Types";

const { createContext, useReducer } = require("react");

export const Store = createContext()

const inialState = {
    cart: { cartItems: [] }
}

function reducer(state, action) {
    switch (action.type) {
        case CART_ADD_ITEM:
            const newItem = action.payload;
            const existingItem = state.cart.cartItems.find(curItem => curItem.id === newItem.id)

            const cartItems = existingItem ? state.cart.cartItems.map(curItem => curItem.name === existingItem.name ? newItem : curItem) : [...state.cart.cartItems, newItem]

            return { ...state, cart: { ...state.cart, cartItems } }




        default:
            return state;
    }
}


export function StoreProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, inialState)

    const values = { state, dispatch }

    return <Store.Provider value={values}> {children}</Store.Provider>



}