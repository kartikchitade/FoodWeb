import React from 'react';
import './App.css';
import { Route, Redirect, BrowserRouter } from "react-router-dom";
import HomeScreen from './Screens/HomeScreen';
import CartScreen from './Screens/CartScreen';
import Navbar from './Navbar';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Route path="/cartScreen/:id" component={CartScreen} />
    <Route path="/" exact={true} component={HomeScreen} />
    <Redirect to="/"/>
    </BrowserRouter>
    </>
  )
};

export default App;
