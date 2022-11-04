import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { post } from '../helpers/requests';
import GenericBtn from '../components/genericBtn';
import GenericInput from '../components/genericInput';

export default function Register() {
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
      const validation = !(
        emailRegex.test(email)
        && name.length >= minNameLength
        && password.length >= minPasswordLength
      );

      setIsBtnDisabled(validation);
    };

    enableBtn();
  }, [email, password, name]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await post('/register', { email, password, name });

      localStorage.setItem('user', JSON.stringify(result));

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
        <GenericInput
          label="Nome"
          name="name"
          type="text"
          value={ name }
          onChange={ ({ target }) => setName(target.value) }
          testId="common_register__input-name"
        />
        <GenericInput
          label="Email"
          name="email"
          type="email"
          value={ email }
          onChange={ ({ target }) => setEmail(target.value) }
          testId="common_register__input-email"
        />
        <GenericInput
          label="Senha"
          name="password"
          type="password"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
          testId="common_register__input-password"
        />
        <GenericBtn
          type="submit"
          dataTestId="common_register__button-register"
          disabled={ isBtnDisabled }
          onClick={ handleSubmit }
          name="Cadastrar"
        />
        {errorMessage && (
          <p data-testid="common_register__element-invalid_register">
            {errorMessage}
          </p>
        )}
      </form>
    </div>
  );
}
