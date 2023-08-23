import { CLEAR_CART } from "./actions"

function reducer(state, action) {

    switch (action.type) {
        case CLEAR_CART:
            return { ...state, cart: [] };
        default:
            return state;
    }



// if (action.type === CLEAR_CART) {
//     return { ...state, cart: [] }
// }
//     return state;
}

export default reducer;