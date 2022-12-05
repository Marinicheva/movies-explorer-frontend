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
        footerLinkText={'Регистрация'}
      >
        <label htmlFor="login-email" className="form__label">E-mail</label>
        <input type="email" id="login-email" name="login-email" className="form__input" />
        <span className="form__error-text"></span>

        <label htmlFor="login-password" className="form__label">Пароль</label>
        <input type="password" id="login-password" name="login-password" className="form__input" />
        <span className="form__error-text"></span>
      </Form>
      {/* <div className="login__bottom">
        <p className="login__bottom-text">Ещё не зарегистрированы?</p>
        <a href="f" className="login__bottom-back">Регистрация</a>
      </div> */}
    </section>
  )
}

export default Login