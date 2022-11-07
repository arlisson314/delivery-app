import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment/moment';

export default function OrdersCard({ order }) {
  return (
    <div>
      <Link to={ `/customer/orders/${order.id}` }>
        <h3 data-testid={ `customer_orders__element-order-id-${order.id}` }>
          {`Pedido ${order.id}`}
        </h3>

        <h1
          data-testid={ `customer_orders__element-delivery-status-${order.id}` }
        >
          {order.status}
        </h1>

        <div>
          <h3 data-testid={ `customer_orders__element-order-date-${order.id}` }>
            {moment(order.saleDate).format('MM/DD/YYYY')}
          </h3>

          <h3 data-testid={ `customer_orders__element-card-price-${order.id}` }>
            {order.totalPrice.replace('.', ',')}
          </h3>
        </div>
      </Link>
    </div>
  );
}

OrdersCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    saleDate: PropTypes.string,
    totalPrice: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};
