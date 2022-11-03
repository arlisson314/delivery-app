import { useState, useEffect } from 'react';
import Header from '../components/header';
import Table from '../components/table';
// import { get } from '../helpers/requests';

export default function CustomerOrders() {
  const [listItens, setListItens] = useState([]);

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

    get('/orders', { headers: { Authorization: userInfos.token } })
      .then((respnose) => setUsers(respnose))
      .catch((err) => console.error(err));
  }, []);
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
      <Table listItens={ listItens } setListItens={ setListItens } />
    </div>
  );
}

// getUTCFullYear()
// getUTCDay()
// getUTCMonth() + 1
