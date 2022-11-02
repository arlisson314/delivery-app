import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Table({ listItens, setListItens }) {
  const [path, setPath] = useState('');
  const location = useLocation();
  useEffect(() => {
    setPath(location.pathname
      .includes('checkout') ? 'customer_checkout' : 'customer_order_details');
  }, [location.pathname]);

  const removeButton = (id) => {
    const newList = listItens.filter((item) => item.id !== id);
    setListItens(newList);
  };

  const totalValue = listItens.reduce((acc, cur) => (
    acc + Number(cur.sub_total.replace(',', '.'))
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
          {listItens.map((item, index) => (
            <tr key={ item.id }>

              <td
                data-testid={ `
              ${path}__element-order-table-item-number-${index}` }
              >
                {item.id}
              </td>

              <td
                data-testid={ `${path}__element-order-table-name-${index}` }
              >
                {item.descrição}
              </td>

              <td
                data-testid={ `${path}__element-order-table-quantity-${index}` }
              >
                {item.quantidade}
              </td>

              <td
                data-testid={ `
                ${path}__element-order-table-unit-price-${index}` }
              >
                {`R$ ${item.valor_unitário}`}
              </td>

              <td
                data-testid={ `
                ${path}__element-order-table-sub-total-${index}` }
              >
                {`R$ ${item.sub_total}`}
              </td>
              <td
                data-testid={ `${path}__element-order-table-remove-${index}` }
              >
                {location.pathname.includes('checkout') && (
                  <button
                    type="button"
                    onClick={ () => removeButton(item.id) }
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
// customer_checkout__element-order-table-quantity-<index></index>
