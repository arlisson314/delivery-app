import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  useEffect(() => {
    const userInfos = JSON.parse(localStorage.getItem('user'));
    setUser(userInfos);
  }, [navigate]);

  return (
    <nav>
      { user?.role === 'customer' && (
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-products"
          onClick={ () => navigate('/customer/products') }
        >
          PRODUTOS
        </button>)}

      <button
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
        onClick={ () => (user?.role === 'customer'
          ? navigate('/customer/orders') : navigate('/seller/orders')) }
      >
        { user?.role === 'customer' ? 'MEUS PEDIDOS' : 'PEDIDOS' }
      </button>

      <p data-testid="customer_products__element-navbar-user-full-name">
        {user?.name}
      </p>

      <button
        data-testid="customer_products__element-navbar-link-logout"
        type="submit"
        onClick={ () => {
          localStorage.clear();
          navigate('/login');
        } }
      >
        SAIR
      </button>
    </nav>
  );
}
