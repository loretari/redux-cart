import React from "react";
// components
import Navbar from "./components/Navbar"
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import { createStore } from "redux";
// reducer

// initial store
const initialStore = {
    count: 78
};

function reducer(state, action) {
    console.log({ state, action })
    if (action.type === "DECREASE") {
       return { count: state.count - 1 }
    }
    return state;
}

const store = createStore(reducer, initialStore);
store.dispatch({type: "DECREASE"})
store.dispatch({type: "DECREASE"})
store.dispatch({type: "DECREASE"})
store.dispatch({type: "DECREASE"})
store.dispatch({type: "DECREASE"})
store.dispatch({type: "DECREASE"})
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