import React from 'react';
import ReactDOM from 'react-dom';
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import SellerOverview from './pages/SellerOverview';
import SellerproductList from './pages/SellerproductList/SellerproductList';
import ShowProduct from './pages/SellerproductList/ShowProduct';
import NewProduct from './pages/newProduct/NewProduct';
import ShowAddProduct from './pages/newProduct/ShowAddProduct';
import ShowProductSeller from './pages/productSeller/ShowProductSeller';
import Checkout from './components/Checkout';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";



const initialOptions = {
  "client-id": "AXn4Umxm3DL3mFb-jTokHfecyeGgzus5yhutecl5sjZLS1J_zIR85Gl-_nvXX1CKg-W8ValVL09qxqEW",
  currency: "USD",
  intent: "capture",
};

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  //const user = true;
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/products/:category" element={<ProductList />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={user ? <Navigate replace to="/" /> : <Login />} />
      <Route path="/register" element={user ? <Navigate replace to="/" /> : <Register />} />
      <Route path="/sellerOverview" element={user ? <SellerOverview /> : <Navigate replace to="/" />} />
      <Route path="/sellerProducts" element={user ? <ShowProduct /> : <Navigate replace to="/" />} />
      <Route path="/newproduct" element={user ? <ShowAddProduct /> : <Navigate replace to="/" />} />
      <Route path="/productSeller/:productId" element={user ? <ShowProductSeller /> : <Navigate replace to="/" />} />
    </Routes>

  );
};

export default App;