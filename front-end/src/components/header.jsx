import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <nav>
      <button
        type="submit"
        data-testid="customer_products__element-navbar-link-products"
        onClick={ () => navigate('/customer/products') }
      >
        PRODUTOS
      </button>

      <button
        type="submit"
        data-testid="customer_products__element-navbar-link-orders"
        onClick={ () => navigate('/customer/checkout') }
      >
        MEUS PEDIDOS
      </button>

      <p
        data-testid="customer_products__element-navbar-user-full-name"
      >
        USUARIO
      </p>

      <button
        data-testid="customer_products__element-navbar-link-logout"
        type="submit"
        onClick={ () => navigate('/login') }
      >
        SAIR
      </button>
    </nav>
  );
}
