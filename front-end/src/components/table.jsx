import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Table({ listProducts, setListProducts }) {
  const [path, setPath] = useState('');
  const location = useLocation();

  useEffect(() => {
    setPath(location.pathname
      .includes('checkout') ? 'customer_checkout' : 'customer_order_details');
  }, [location.pathname]);

  const removeButton = (id) => {
    const newList = listProducts.filter((item) => item?.id !== id);
    setListProducts(newList);
    localStorage.carrinho = JSON.stringify(newList.filter((i) => i));
  };

  const totalValue = listProducts.reduce((acc, cur) => (
    acc + (Number(cur?.price) * Number(cur?.qnt))
  ), 0).toFixed(2).replace('.', ',');

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>

        <tbody>
          {listProducts.map((item, index) => (
            <tr key={ index }>

              <td
                data-testid={ `${path}__element-order-table-item-number-${index}` }
              >
                {(item?.id)}
              </td>

              <td
                data-testid={ `${path}__element-order-table-name-${index}` }
              >
                {item?.name}
              </td>

              <td
                data-testid={ `${path}__element-order-table-quantity-${index}` }
              >
                {item?.qnt}
              </td>

              <td
                data-testid={ `${path}__element-order-table-unit-price-${index}` }
              >
                {`R$ ${Number(item?.price).toFixed(2).replace('.', ',')}`}
              </td>

              <td
                data-testid={ `${path}__element-order-table-sub-total-${index}` }
              >
                {`R$ ${(Number(item?.price) * Number(item?.qnt)).toFixed(2)
                  .replace('.', ',')}`}
              </td>
              <td
                data-testid={ `${path}__element-order-table-remove-${index}` }
              >
                {location.pathname.includes('checkout') && (
                  <button
                    type="button"
                    onClick={ () => removeButton(item?.id) }
                  >
                    Remover
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3
        data-testid={ `${path}__element-order-total-price` }
      >
        { `Total: R$ ${totalValue}`}
      </h3>
    </div>
  );
}

Table.propTypes = ({
  listItens: PropTypes.array,
  setListItens: PropTypes.func,
}).isRequired;

// customer_checkout__element-order-table-name-<index>
// customer_order_details__element-order-table-name-<index>

// customer_order_details__element-order-table-quantity-<index>
// customer_checkout__element-order-table-quantity-<index>
