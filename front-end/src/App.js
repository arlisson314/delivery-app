import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import CustomerCheckout from './pages/CustomerCheckout';
import Register from './pages/Register';
import CustomerProducts from './pages/CustomerProducts';
import Orders from './pages/Orders';
import CustomerOrders from './pages/CustomerOrders';
import SellerOrders from './pages/SellerOrders';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/customer/checkout" element={ <CustomerCheckout /> } />
      <Route path="/customer/orders/:idVenda" element={ <CustomerOrders /> } />
      <Route path="/customer/orders" element={ <Orders /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/customer/products" element={ <CustomerProducts /> } />
      <Route path="/customer/orders" element={ <Orders /> } />
      <Route exat path="/seller/orders" element={ <SellerOrders /> } />
      <Route path="/seller/orders/:id" />
    </Routes>
  );
}

export default App;
