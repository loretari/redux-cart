import React from "react";
// components
import Navbar from "./components/Navbar"
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import { createStore } from "redux";

// reducer
import reducer from "./reducer";
// react-redux - Provider - wraps app, connect - used in components
import { Provider } from "react-redux";

// initial store
const initialStore = {
   cart: cartItems,
    total: 105,
    amount: 5
};





const store = createStore(reducer, initialStore);


function App() {

    return (
        <Provider store={store}>
            <Navbar />
            <CartContainer />
        </Provider>
    )
}

export default App;