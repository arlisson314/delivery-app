import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Table() {
  const [listItens, setListItens] = useState([]);
  const [path, setPath] = useState('');
  const location = useLocation();

  useEffect(() => {
    // const itensMock = [
    //   {
    //     id: '1',
    //     descrição: 'Cerveja Stella 250ml',
    //     quantidade: '3',
    //     valor_unitário: '3,50',
    //     sub_total: '10,50',
    //   },
    //   {
    //     id: '2',
    //     descrição: 'Cerveja Skol Latão 450ml',
    //     quantidade: '4',
    //     valor_unitário: '4,10',
    //     sub_total: '16,40',
    //   },
    //   {
    //     id: '3',
    //     descrição: 'Salgadinho Torcida Churrasco',
    //     quantidade: '1',
    //     valor_unitário: '1,56',
    //     sub_total: '1,56',
    //   },
    // ];
    // setListItens(itensMock);
    setPath(location.pathname
      .includes('checkout') ? 'customer_checkout' : 'customer_order_details');
  }, [location.pathname]);

  // console.log(path);
  // console.log(location);

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

// customer_checkout__element-order-table-name-<index>
// customer_order_details__element-order-table-name-<index>

// customer_order_details__element-order-table-quantity-<index>
// customer_checkout__element-order-table-quantity-<index></index>
