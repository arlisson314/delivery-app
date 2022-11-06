import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import momment from 'moment';
import GenericBtn from '../components/genericBtn';
import TableSellerDetails from '../components/tableSellerDetails';
import { get } from '../helpers/requests';
import convertNumber from '../helpers/convertNumber';

export default function SellerOrdersDetails() {
  const PAGE_NAME = 'seller_order_details__';
  const [order, setOrder] = useState({});
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const getOrders = async () => {
      const response = await get(`orders/${id}`, {
        headers: { Authorization: user.token },
      });
      setOrder(response);
      setProducts(response.products);
    };
    getOrders();
  }, [id]);

  return (
    <div>
      <h2>Detalhe do Pedido</h2>
      <div style={ { display: 'flex', gap: '10px' } }>
        <p data-testid={ `${PAGE_NAME}element-order-details-label-order-id` }>
          {`Pedido 000${order.id}`}
        </p>
        <p data-testid={ `${PAGE_NAME}element-order-details-label-seller-date` }>
          {momment(order.saleDate).format('MM/DD/YYYY')}
        </p>
        <p
          data-testid={ `${PAGE_NAME}element-order-details-label-delivery-status` }
        >
          {order.status}
        </p>

        <GenericBtn
          type="button"
          name="Preparar pedido"
          dataTestId={ `${PAGE_NAME}button-preparing-check` }
          onClick={ () => console.log('Cliquei') }
          disabled={ order.status !== 'Pendente' }
        />

        <GenericBtn
          type="button"
          name="Saiu para entrega"
          dataTestId={ `${PAGE_NAME}button-dispatch-check` }
          onClick={ () => console.log('Cliquei') }
          disabled={ order.status !== 'Preparando' }
        />
      </div>

      <TableSellerDetails orders={ products } />

      <h1 data-testid={ `${PAGE_NAME}element-order-total-value` }>
        {`Total: R$ ${convertNumber(order.totalPrice)}`}
      </h1>
    </div>
  );
}
