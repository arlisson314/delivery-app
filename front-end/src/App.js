import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import CustomerCheckout from './pages/CustomerCheckout';
import Register from './pages/Register';
import CustomerProducts from './pages/CustomerProducts';
import CustomerOrders from './pages/CustomerOrders';
import CustomerOrdersDetails from './pages/CustomerOrdersDetails';
import SellerOrders from './pages/SellerOrders';
import SellerOrdersDetails from './pages/SellerOdersDetails';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/customer/checkout" element={ <CustomerCheckout /> } />
      <Route
        path="/customer/orders/:idVenda"
        element={ <CustomerOrdersDetails /> }
      />
      <Route path="/customer/orders" element={ <CustomerOrders /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/customer/products" element={ <CustomerProducts /> } />
      <Route exat path="/seller/orders" element={ <SellerOrders /> } />
      <Route path="/seller/orders/:id" element={ <SellerOrdersDetails /> } />
    </Routes>
  );
}

export default App;
