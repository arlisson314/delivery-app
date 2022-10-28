import Header from '../components/header';
import Table from '../components/table';

export default function Checkout() {
  return (
    <div>
      <Header />
      <p>Finalizar Pedido</p>
      <Table />
      <h3>Total: R$ 28,46</h3>
      <p>Detalhes e Endereço para Entrega</p>
      <form>
        <label htmlFor="Vendedora">
          P. Vendedora Responsável:
          <select id="Vendedora">
            <option>
              Fulana Pereira
            </option>
            <option>
              Cicrana Sousa
            </option>
          </select>
        </label>

        <label htmlFor="endereco">
          Endereço
          <input
            type="text"
            name="endereco"
          />
        </label>

        <label htmlFor="endereço">
          Número
          <input
            type="text"
            name="endereço"
            id="endereço"
          />
        </label>

        <button
          type="button"
        >
          FINALIZAR PEDIDO
        </button>
      </form>
    </div>
  );
}
