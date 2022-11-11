import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/header';
import Table from '../components/table';
import { getAll } from '../helpers/requests';
import Loading from '../components/loadin';

export default function CustomerCheckout() {
  const [listProducts, setListProducts] = useState([]);
  const [sellers, setSellers] = useState([]);
  const navigate = useNavigate();
  const [sellerId, setSellerId] = useState(2);
  const [userId, setUserId] = useState('');
  const [userToken, setUserToken] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if ('carrinho' in localStorage) {
      const getItens = JSON.parse(localStorage.getItem('carrinho'));
      const filtredItens = getItens.filter((i) => i !== null);
      setListProducts(filtredItens);
    }

    const { id, token } = JSON.parse(localStorage.getItem('user'));
    setUserId(id);
    setUserToken(token);

    getAll('/users')
      .then((response) => setSellers(response.filter((user) => user.role === 'seller')))
      .catch((err) => console.error(err));
  }, []);

  const totalValue = listProducts.reduce((acc, cur) => (
    Number(acc) + (Number(cur?.price) * Number(cur?.qnt))
  ), 0).toFixed(2).replace('.', ',');

  const handleSubmit = async () => {
    const products = listProducts.map((item) => ({ id: item.id, quantity: item.qnt }));
    const TIME = 1500;
    const newSale = {
      userId,
      sellerId,
      totalPrice: Number.parseFloat(totalValue.replace(',', '.')),
      deliveryAddress,
      deliveryNumber,
      saleDate: new Date().toISOString(),
      status: 'Pendente',
      products,
    };

    const result = await axios
      .post('http://localhost:3001/orders', newSale, { headers: { Authorization: userToken } })
      .then((res) => res.data);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(`/customer/orders/${result.id}`);
    }, TIME);
  };

  return (
    <div>
      {(!loading) && (
        <>
          <Header />
          <p>Finalizar Pedido</p>
          <Table
            listProducts={ listProducts }
            setListProducts={ setListProducts }
            totalValue={ totalValue }
          />
          <p>Detalhes e Endereço para Entrega</p>
          <form>
            <label htmlFor="vendedora">
              P. Vendedora Responsável:
              <select
                id="vendedora"
                name="vendedora"
                data-testid="customer_checkout__select-seller"
                value={ sellerId }
                onChange={ ({ target: { value } }) => setSellerId(value) }
              >
                {sellers?.map(({ id, name }) => (
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
                onChange={ ({ target: { value } }) => setDeliveryAddress(value) }
              />
            </label>

            <label htmlFor="numero">
              Número
              <input
                type="number"
                name="numero"
                id="numero"
                data-testid="customer_checkout__input-address-number"
                onChange={ ({ target: { value } }) => setDeliveryNumber(value) }
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
        </>
      )}
      {loading && (<Loading />)}
    </div>
  );
}
