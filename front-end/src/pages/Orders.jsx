import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/header';
import OrdersCard from '../components/orderCard';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    axios
      .get('http://localhost:3001/orders', {
        headers: {
          Authorization: user.token,
        },
        body: {
          userId: user.id,
          role: user.role,
        },
      }).then((response) => {
        setOrders(response.data);
      }).catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Header />
      {orders.map((order) => (
        <OrdersCard key={ order.id } order={ order } />
      ))}
    </div>
  );
}
