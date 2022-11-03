import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header';
import SellerOrder from '../components/SellerOrder';

export default function SellerOrders() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const userInfos = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchOrders = async () => {
      const fetchItems = await axios
        .get('http://localhost:3001/seller/orders', { headers: { Authorization: userInfos.token } })
        .then((res) => res.data).catch((err) => console.log(err));
      setOrders(fetchItems || mockOrders);
    };
    fetchOrders();
  }, [orders, userInfos.token]);

  const handleNavigate = (index) => {
    navigate(`/seller/orders/${index}`);
  };

  return (
    <div>
      <Header />
      {orders?.map((order, index) => (
        <SellerOrder
          key={ index }
          data={ order }
          style={ { border: '2px solid black' } }
          handleNavigate={ handleNavigate }
        />
      ))}
    </div>
  );
}
