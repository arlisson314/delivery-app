import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header';
import Table from '../components/table';
import { getAll } from '../helpers/requests';

export default function CustomerCheckout() {
  const [listProducts, setListProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [userData, setUserData] = useState('');

  useEffect(() => {
    if ('carrinho' in localStorage) {
      const getItens = JSON.parse(localStorage.getItem('carrinho'));
      const filtredItens = getItens.filter((i) => i !== null);
      setListProducts(filtredItens);
    }
    getAll('/users')
      .then((respnose) => setUsers(respnose.filter((user) => user.role === 'seller')))
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = async () => {
    navigate(`/customer/orders/${1}`);
  };

  return (
    <div>
      <Header />
      <p>Finalizar Pedido</p>
      <Table listProducts={ listProducts } setListProducts={ setListProducts } />
      <p>Detalhes e Endereço para Entrega</p>
      <form>
        <label htmlFor="vendedora">
          P. Vendedora Responsável:
          <select
            id="vendedora"
            name="vendedora"
            data-testid="customer_checkout__select-seller"
            value={ userData }
            onChange={ ({ target: { value } }) => setUserData(value) }
          >
            {users?.map(({ id, name }) => (
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
