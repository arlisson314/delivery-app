import { useState, useEffect } from 'react';
import Header from '../components/header';
import Table from '../components/table';
import { get } from '../helpers/requests';

export default function CustomerOrders() {
  const [listProducts, setListProducts] = useState([]);
  const [listSeles, setListSales] = useState([]);

  useEffect(() => {
    if ('carrinho' in localStorage) {
      setListProducts(JSON.parse(localStorage.carrinho));
    }
    const user = JSON.parse(localStorage.user);
    get('/orders', {
      headers: { Authorization: user.token },
      params: { userId: user.id, role: user.role } })
      .then((response) => setListSales(response))
      .catch((err) => console.error(err));
  }, []);
  console.log(listSeles);
  // const COMPARE = 10;
  // const d = new Date('2012-10-10T15:00:00-07:00');
  // console.log(d);
  // const test = `
  // ${d.getUTCDate() < COMPARE ? (`0${d.getUTCDate()}`)
  //   : d.getUTCDate()}/${(d.getUTCMonth() + 1) < COMPARE
  // ? (`0${d.getUTCMonth() + 1}`) : (d.getUTCMonth() + 1)}/${d.getUTCFullYear()}`;
  // console.log(test);
  return (
    <div>
      <Header />
      <p>Detalhe do Pedido</p>
      <Table listProducts={ listProducts } setListItens={ setListProducts } />
    </div>
  );
}
// headers: { Authorization: user.token },
// params: { userId: user.id, role: user.role },
