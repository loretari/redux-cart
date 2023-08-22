import React from "react";
// components
import Navbar from "./components/Navbar"
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import { createStore } from "redux";
import { DECREASE, INCREASE} from "./components/actions";
// reducer

// initial store
const initialStore = {
    count: 0,
    name: "john"
};



function reducer(state, action) {
    console.log({ state, action })
    if (action.type === DECREASE) {
       return { ...state, count: state.count - 1, name: "anna" }
    }
    if (action.type === INCREASE) {
        return { ...state, count: state.count + 1}
    }

    return state;
}

const store = createStore(reducer, initialStore);
store.dispatch({type: DECREASE})
store.dispatch({type: INCREASE})
store.dispatch({type: INCREASE})
store.dispatch({type: INCREASE})
store.dispatch({type: INCREASE})



console.log(store.getState())

function App() {

    return (
        <main>
            <Navbar cart={store.getState} />
            <CartContainer cart={cartItems}/>
        </main>
    )
}

export default App;