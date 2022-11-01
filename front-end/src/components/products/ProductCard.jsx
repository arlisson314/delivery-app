import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function ProductCard({ data, addProduct }) {
  const [count, setCount] = useState(0);
  const { id, urlImage, name, price } = data;

  const handleProduct = (quantity) => {
    if (quantity >= 0) {
      setCount(quantity);
      addProduct(id, quantity);
    }
  };

  return (
    <div>
      <h2
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        { `R$${price}` || 'R$0,00' }
      </h2>
      <img
        src={ urlImage }
        alt={ name }
        style={ { width: '200px' } }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <h3
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        { name }
      </h3>
      <div id="product-increase">
        <button
          type="submit"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          onClick={ () => handleProduct(count - 1) }
        >
          -
        </button>
        <input
          type="number"
          name="product-quantity"
          id="product-quantity"
          data-testid={ `customer_products__input-card-quantity-${id}` }
          value={ count }
          onChange={ ({ target }) => handleProduct(Number(target.value)) }
        />
        <button
          onClick={ () => handleProduct(count + 1) }
          type="submit"
          data-testid={ `customer_products__button-card-add-item-${id}` }
        >
          +
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    urlImage: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
  addProduct: PropTypes.func.isRequired,
};
