import React from 'react';

export default function Login() {
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
          />
        </label>
        <label htmlFor="input-password">
          Senha
          <input
            type="password"
            name="input-password"
            data-testid="common_login__input-password"
            id="input-login"
          />
        </label>
        <button type="submit" data-testid="common_login__button-login">
          LOGIN
        </button>
        <button
          id="register-button"
          data-testid="common_login__button-register"
          type="button"
        >
          Ainda não tenho conta
        </button>
      </form>
      <div data-testid="common_login__element-invalid-email" />
    </div>
  );
}
