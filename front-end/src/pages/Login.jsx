import React, { useEffect, useState } from 'react';

export default function Login() {
  const [disabled, setDisebled] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const MIN_DIG = 6;
    const regex = /^.*@.*\.com$/;
    setDisebled(!(password.length >= MIN_DIG && email.match(regex)));
  }, [email, password]);

  return (
    <div>
      <h1>Login</h1>
      <form action="" method="post">
        <label htmlFor="input-login">
          Login
          <input
            type="email"
            name="input-login"
            data-testid="common_login__input-email"
            id="input-login"
            onChange={ ({ target: { value } }) => setEmail(value) }
          />
        </label>
        <label htmlFor="input-password">
          Senha
          <input
            type="password"
            name="input-password"
            data-testid="common_login__input-password"
            id="input-login"
            onChange={ ({ target: { value } }) => setPassword(value) }
          />
        </label>
        <button
          type="submit"
          data-testid="common_login__button-login"
          disabled={ disabled }
        >
          LOGIN
        </button>

        <button
          type="submit"
          id="register-button"
          data-testid="common_login__button-register"
        >
          Ainda não tenho conta
        </button>

      </form>
      <div data-testid="common_login__element-invalid-email" />
    </div>
  );
}
