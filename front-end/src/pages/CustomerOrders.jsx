import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/header';
import Table from '../components/table';

export default function CustomerOrders() {
  const [listProducts, setListProducts] = useState([]);
  const [listSeles, setListSales] = useState([]);
  const NUM = 1000;
  const COMPARE = 10;
  const { idVenda } = useParams();
  const path = 'customer_order_details__element-order-details-label-delivery-status';

  useEffect(() => {
    if ('carrinho' in localStorage) {
      setListProducts(JSON.parse(localStorage.carrinho));
    }
    const user = JSON.parse(localStorage.user);
    axios.get(`http://localhost:3001/orders/${idVenda}`, {
      headers: { Authorization: user.token },
      params: { userId: user.id, role: user.role } })
      .then((res) => setListSales([res.data]))
      .catch((err) => console.error(err));
  }, [idVenda]);

  const totalValue = listProducts.reduce((acc, cur) => (
    Number(acc) + (Number(cur?.price) * Number(cur?.qnt))
  ), 0).toFixed(2).replace('.', ',');

  return (
    <div>
      <Header />
      {listSeles.map((item, index) => (
        <div key={ item.id }>
          <span
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            {`PEDIDO ${String(Number(item.id) / NUM).replace('.', '')};`}
          </span>
          <span
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            {` P. Vend: ${item?.seller?.name}`}
          </span>
          <span
            data-testid="customer_order_details__element-order-details-label-order-date"
          >
            {`${item?.saleDate.slice(0, COMPARE)}`}
          </span>

          <span
            data-testid={ `${path}${index}` }
          >
            {item?.status}
          </span>
          <button
            type="button"
            disabled
            data-testid="customer_order_details__button-delivery-check"
          >
            MARCAR COMO ENTREGUE
          </button>
        </div>
      ))}

      <p>Detalhe do Pedido</p>
      <Table
        listProducts={ listProducts }
        setListItens={ setListProducts }
        totalValue={ totalValue }
      />
    </div>
  );
}
