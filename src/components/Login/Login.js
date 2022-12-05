import React from 'react';

import Greeting from '../Greeting/Greeting';

const Login = () => {
  return (
    <section className='login'>
        <Greeting title="Рады видеть!" />
        <form className="login-form">
          <label htmlFor="login-email" className="login-form__label">E-mail</label>
          <input type="email" id="login-email" name="login-email" className="login-form__input" />

          <label htmlFor="login-password" className="login-form__label">Пароль</label>
          <input type="password" id="login-password" name="login-password" className="login-form__input" />
        </form>
      </section>
      )
}

      export default Login