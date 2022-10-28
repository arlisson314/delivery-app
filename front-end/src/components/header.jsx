import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <nav>
      <button
        type="submit"
        onClick={ () => navigate('/customer/products') }
      >
        PRODUTOS
      </button>

      <button
        type="submit"
        onClick={ () => navigate('/customer/checkout') }
      >
        MEUS PEDIDOS
      </button>

      <p>USUARIO</p>

      <button
        type="submit"
        onClick={ () => navigate('/login') }
      >
        SAIR
      </button>
    </nav>
  );
}
