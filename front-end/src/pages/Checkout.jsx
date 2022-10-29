import Header from '../components/header';
import Table from '../components/table';

export default function Checkout() {
  return (
    <div>
      <Header />
      <p>Finalizar Pedido</p>
      <Table />
      <h3
        data-testid="customer_checkout__element-order-total-price"
      >
        Total: R$ 28,46
      </h3>
      <p>Detalhes e Endereço para Entrega</p>
      <form>
        <label htmlFor="vendedora">
          P. Vendedora Responsável:
          <select
            id="vendedora"
            name="vendedora"
            data-testid="customer_checkout__select-seller"
          >
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
          type="submit"
          data-testid="customer_checkout__button-submit-order"
        >
          FINALIZAR PEDIDO
        </button>
      </form>
    </div>
  );
}
