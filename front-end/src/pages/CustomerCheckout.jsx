import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header';
import Table from '../components/table';
import { getAll } from '../helpers/requests';

export default function CustomerCheckout() {
  const [listItens, setListItens] = useState([]);
  const [Users, setUsers] = useState([]);
  const navigate = useNavigate();

  // const [UserData, setUserData] = useState({});
  // const getUserDb = getAll('/orders')
  // .then((respnose) => setUsers(respnose))
  // .catch((err) => console.error(err));

  useEffect(() => {
    const itensMock = [
      {
        id: '1',
        descrição: 'Cerveja Stella 250ml',
        quantidade: '3',
        valor_unitário: '3,50',
        sub_total: '10,50',
      },
      {
        id: '2',
        descrição: 'Cerveja Skol Latão 450ml',
        quantidade: '4',
        valor_unitário: '4,10',
        sub_total: '16,40',
      },
    ];
    setListItens(itensMock);

    getAll('/users')
      .then((respnose) => setUsers(respnose.filter((user) => user.role === 'seller')))
      .catch((err) => console.error(err));
  }, []);
  console.log(Users);

  const handleSubmit = async (event) => {
    event.preventDefault();
    navigate(`/customer/orders/${1}`);
  };

  return (
    <div>
      <Header />
      <p>Finalizar Pedido</p>
      <Table listItens={ listItens } setListItens={ setListItens } />
      <p>Detalhes e Endereço para Entrega</p>
      <form>
        <label htmlFor="vendedora">
          P. Vendedora Responsável:
          <select
            id="vendedora"
            name="vendedora"
            data-testid="customer_checkout__select-seller"
          >
            {Users?.map(({ id, name }) => (
              <option
                key={ id }
                value={ id }
              >
                {name}
              </option>))}
          </select>
        </label>

        <label htmlFor="endereco">
          Endereço
          <input
            type="text"
            id="endereco"
            name="endereco"
            data-testid="customer_checkout__input-address"
          />
        </label>

        <label htmlFor="endereço">
          Número
          <input
            type="text"
            name="endereço"
            id="endereço"
            data-testid="customer_checkout__input-address-number"
          />
        </label>

        <button
          type="button"
          data-testid="customer_checkout__button-submit-order"
          onClick={ handleSubmit }
        >
          FINALIZAR PEDIDO
        </button>
      </form>
    </div>
  );
}
