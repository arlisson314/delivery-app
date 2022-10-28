import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { post } from '../../helpers/requests';

export default function RegisterComponent() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const enableBtn = () => {
      const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      const minNameLength = 12;
      const minPasswordLength = 6;
      const validation = !(emailRegex.test(email)
      && name.length >= minNameLength
      && password.length >= minPasswordLength);

      setIsBtnDisabled(validation);
    };

    enableBtn();
  }, [email, password, name]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await post('/register', { email, password, name });

      navigate('/customer/products');
    } catch ({ response }) {
      const { status, data } = response;
      setErrorMessage(`${status} - ${data.message}`);
    }
  };
  return (
    <div>
      <h2>Cadastro</h2>

      <form>
        <label htmlFor="name-input">
          Nome
          <input
            type="text"
            name="name"
            id="name-input"
            data-testid="common_register__input-name"
            value={ name }
            onChange={ ({ target }) => setName(target.value) }
          />
        </label>

        <label htmlFor="email-input">
          Email
          <input
            type="email"
            name="email"
            id="email-input"
            data-testid="common_register__input-email"
            value={ email }
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>

        <label htmlFor="password-input">
          Senha
          <input
            type="password"
            name="password"
            id="password-input"
            data-testid="common_register__input-password"
            value={ password }
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>

        <button
          type="submit"
          data-testid="common_register__button-register"
          disabled={ isBtnDisabled }
          onClick={ handleSubmit }
        >
          Cadastrar
        </button>

        {errorMessage && (
          <p data-testid="common_register__element-invalid_register">
            {errorMessage}
          </p>
        )}
      </form>
    </div>
  );
}
