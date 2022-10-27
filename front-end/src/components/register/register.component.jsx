import React from "react";

export default function RegisterComponent() {
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
          />
        </label>

        <label htmlFor="email-input">
          Email
          <input
            type="email"
            name="email"
            id="email-input"
            data-testid="common_register__input-email"
          />
        </label>

        <label htmlFor="password-input">
          Senha
          <input
            type="password"
            name="password"
            id="password-input"
            data-testid="common_register__input-password"
          />
        </label>

        <button type="button" data-testid="common_register__button-register">
          Cadastrar
        </button>
      </form>
    </div>
  );
}
