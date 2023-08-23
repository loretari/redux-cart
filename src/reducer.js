import { CLEAR_CART, INCREASE, DECREASE, REMOVE } from "./actions"

function reducer(state, action) {

if (action.type === CLEAR_CART) {
    return { ...state, cart: [] }
}
    if (action.type === DECREASE) {
       console.log("you have decreased amount")
    }
    if (action.type === INCREASE) {
        console.log("you have increase amount")

    }
    if (action.type === REMOVE) {
        return {
            ...state,
            cart: state.cart.filter(cartItem => cartItem.id !== action.payload.id) }

    }
    return state;
}

export default reducer;

// switch (action.type) {
//     case CLEAR_CART:
//         return { ...state, cart: [] };
//     default:
//         return state;
// }
