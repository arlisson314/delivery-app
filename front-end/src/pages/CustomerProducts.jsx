import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/products/ProductCard';
import { get } from '../helpers/requests';

export default function CustomerProducts() {
  const [orders, setOrders] = useState([]);
  const [totalValue, setTotalValue] = useState('0,00');
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInfos = async () => {
      const { results } = get('/customer/products');
      setProducts(results);
    };
    fetchInfos();
  }, [products]);

  useEffect(() => {}, [totalValue]);

  const addProduct = (i, qnt) => {
    orders[i] = products[i];
    orders[i].qnt = qnt;
    orders[i].id = i;
    setOrders(orders);
    localStorage.setItem('carrinho', JSON.stringify(orders));
    const value = orders.reduce((acc, cur) => acc + cur.price * cur.qnt, 0);
    setTotalValue(value.toFixed(2).replace('.', ','));
  };

  return (
    <div>
      <h1>Produtos</h1>
      {products?.map((product, index) => (
        <ProductCard
          key={ index }
          data={ product }
          index={ index }
          addProduct={ addProduct }
        />
      ))}
      <button
        type="submit"
        data-testid="customer_products__button-cart"
        onClick={ () => navigate('/customer/checkout') }
      >
        <div data-testid="customer_products__checkout-bottom-value">
          Ver Carrinho: R$
          { totalValue }
        </div>
      </button>
    </div>
  );
}
