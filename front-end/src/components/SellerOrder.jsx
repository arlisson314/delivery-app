import React from 'react';
import PropTypes from 'prop-types';

export default function SellerOrder({ data, handleNavigate }) {
  const { id, status, saleDate, totalPrice, deliveryAddress, deliveryNumber } = data;
  return (
    <div
      onClick={ () => handleNavigate(id) }
      onKeyDown={ () => {} }
      role="button"
      tabIndex="0"
    >
      <span data-testid={ `seller_orders__element-order-id-${id}` }>
        Pedido
        <br />
        {id}
      </span>
      <span>
        <span data-testid={ `seller_orders__element-delivery-status-${id}` }>
          {status}
        </span>
        <span data-testid={ `seller_orders__element-order-date-${id}` }>
          {saleDate}
        </span>
        <span>
          R$
          <span data-testid={ `seller_orders__element-card-price-${id}` }>
            {totalPrice}
          </span>
        </span>
        <div data-testid={ `seller_orders__element-card-address-${id}` }>
          {deliveryAddress}
          ,
          {deliveryNumber}
        </div>
      </span>
    </div>
  );
}

SellerOrder.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    status: PropTypes.string,
    saleDate: PropTypes.string,
    totalPrice: PropTypes.string,
    deliveryAddress: PropTypes.string,
    deliveryNumber: PropTypes.string,
  }).isRequired,
  handleNavigate: PropTypes.func.isRequired,
};
