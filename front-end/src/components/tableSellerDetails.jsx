import PropTypes from 'prop-types';
import convertNumber from '../helpers/convertNumber';

export default function TableSellerDetails({ orders }) {
  const PAGE_NAME = 'seller_order_details__';
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index) => (
          <tr key={ order.id }>
            <td
              data-testid={ `${PAGE_NAME}element-order-table-item-number-${index}` }
            >
              {index + 1}
            </td>
            <td data-testid={ `${PAGE_NAME}element-order-table-name-${index}` }>
              {order.name}
            </td>
            <td
              data-testid={ `${PAGE_NAME}element-order-table-quantity-${index}` }
            >
              {order.SaleProducts.quantity}
            </td>
            <td
              data-testid={ `${PAGE_NAME}element-order-table-unit-price-${index}` }
            >
              {order.price.replace('.', ',')}
            </td>

            <td
              data-testid={ `${PAGE_NAME}element-order-table-sub-total-${index}` }
            >
              {convertNumber(Number(order.price) * order.SaleProducts.quantity)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TableSellerDetails.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      quantity: PropTypes.number,
      price: PropTypes.string,
    }),
  ).isRequired,
};
