import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/customer/checkout" element={ <Checkout /> } />
    </Routes>
  );
}

export default App;
