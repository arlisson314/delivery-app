import { useState, useEffect } from 'react';
import axios from 'axios';
import GenericBtn from '../components/genericBtn';
import GenericInput from '../components/genericInput';

export default function Admin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('customer');
  const [errorMessage, setErrorMessage] = useState('');
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const data = { email, password, name, role };
      await axios.post('http://localhost:3001/admin/register', data, {
        headers: { Authorization: user.token, role: user.role },
      });

      setEmail('');
      setPassword('');
      setName('');
      setRole('customer');
    } catch (error) {
      const { status, data } = error.response;
      setErrorMessage(`${status} - ${data.message} `);
    }
  };

  return (
    <form>
      <h1>Cadastrar novo usuário</h1>
      {errorMessage && (
        <p data-testid="admin_manage__element-invalid-register">
          {errorMessage}
        </p>
      )}
      <GenericInput
        label="Nome"
        name="name"
        type="text"
        value={ name }
        onChange={ ({ target }) => setName(target.value) }
        testId="admin_manage__input-name"
      />

      <GenericInput
        label="Email"
        name="email"
        type="email"
        value={ email }
        onChange={ ({ target }) => setEmail(target.value) }
        testId="admin_manage__input-email"
      />

      <GenericInput
        label="Senha"
        name="password"
        type="password"
        value={ password }
        onChange={ ({ target }) => setPassword(target.value) }
        testId="admin_manage__input-password"
      />

      <select
        data-testid="admin_manage__select-role"
        onChange={ ({ target }) => setRole(target.value) }
      >
        <option value="customer">Cliente</option>
        <option value="seller">Vendedor</option>
        <option value="administrator">Administrador</option>
      </select>

      <GenericBtn
        type="submit"
        name="Cadastrar"
        dataTestId="admin_manage__button-register"
        onClick={ handleSubmit }
        disabled={ isBtnDisabled }
      />
    </form>
  );
}
