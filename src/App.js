import React, { useState } from 'react';
import './App.css';
import { Route, Redirect, BrowserRouter } from "react-router-dom";
import HomeScreen from './Screens/HomeScreen';
import CartScreen from './Screens/CartScreen';
import Navbar from './Navbar';


const App = () => {
  //change from Anshulli
  //second change
  const [cartItems, setCartItems] = useState([]);

  const handleAddCartItem = (item) => {
    setCartItems([...cartItems, item])
  }

  const handleRemoveCartItem = (id) => {
    const filteredCartItems = cartItems.filter(item => item._id !== id);
    setCartItems(filteredCartItems);
  }

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Route path="/cartScreen" render={() => <CartScreen items={cartItems} onRemoveItem={handleRemoveCartItem} />} />
        <Route path="/" exact={true} render={() => <HomeScreen cartItems={cartItems} onAddCartItem={handleAddCartItem} />} />
        <Redirect to="/" />
      </BrowserRouter>
    </>
  )
};

export default App;
