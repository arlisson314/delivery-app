import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function ProductCard({ index, data, addProduct }) {
  const [count, setCount] = useState(0);
  const { urlImage, name, price } = data;

  const handleProduct = (quantity) => {
    if (quantity >= 0) {
      setCount(quantity);
      addProduct(index, quantity);
    }
  };

  return (
    <div>
      <h2
        data-testid={ `customer_products__element-card-price-${index}` }
      >
        { `R$${price}` || 'R$0,00' }
      </h2>
      <img
        src={ urlImage }
        alt={ name }
        style={ { width: '200px' } }
        data-testid={ `customer_products__img-card-bg-image-${index}` }
      />
      <h3
        data-testid={ `customer_products__element-card-title-${index}` }
      >
        { name }
      </h3>
      <div id="product-increase">
        <button
          type="submit"
          data-testid={ `customer_products__button-card-rm-item-${index}` }
          onClick={ () => handleProduct(count - 1) }
        >
          -
        </button>
        <input
          type="number"
          name="product-quantity"
          id="product-quantity"
          data-testid={ `customer_products__input-card-quantity-${index}` }
          value={ count }
          onChange={ ({ target }) => handleProduct(Number(target.value)) }
        />
        <button
          onClick={ () => handleProduct(count + 1) }
          type="submit"
          data-testid={ `customer_products__button-card-add-item-${index}` }
        >
          +
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  index: PropTypes.number.isRequired,
  data: PropTypes.shape({
    urlImage: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
  addProduct: PropTypes.func.isRequired,
};
