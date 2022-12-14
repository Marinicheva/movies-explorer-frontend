import React from 'react';

import Greeting from '../Greeting/Greeting';
import Form from '../Form/Form';

import './Login.css';

const Login = () => {
  return (
    <section className='login'>
      <Greeting title={"Рады видеть!"} />

      <Form
        formClass="login-form"
        submitBtnText={'Войти'}
        footerText={'Ещё не зарегистрированы?'}
        footerPath={'/signup'}
        footerLinkText={'Регистрация'}
      >
        <label htmlFor="login-email" className="form__label">E-mail</label>
        <input
          type="email"
          id="login-email"
          name="login-email"
          className="form__input"
          placeholder='Введите e-mail'
          required
        />
        <span className="form__error-text"></span>

        <label htmlFor="login-password" className="form__label">Пароль</label>
        <input
          type="password"
          id="login-password"
          name="login-password"
          className="form__input"
          placeholder='Введите пароль'
          required
        />
        <span className="form__error-text"></span>
      </Form>
    </section>
  )
}

export default Login