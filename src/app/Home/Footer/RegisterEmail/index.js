import React, { useState } from 'react';
import { container } from './RegisterEmail.module.scss';

export default function RegisterEmail() {
  const [email, setEmail] = useState('');

  function registerEmail() {
    // todo: validate email
    // todo: send email to api
  }

  return (
    <form className={container}>
      <input
        type="email"
        placeholder="Endereço de email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="button" onClick={registerEmail}>
        Cadastrar
      </button>
    </form>
  );
}
