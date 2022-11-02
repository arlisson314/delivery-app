import Header from '../components/header';
import Table from '../components/table';

export default function CustomerOrders() {
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
      <Table />
    </div>
  );
}

// getUTCFullYear()
// getUTCDay()
// getUTCMonth() + 1
