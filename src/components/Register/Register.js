import React from 'react';
import Form from '../Form/Form';

import Greeting from '../Greeting/Greeting';

import './Register.css';

const Register = () => {
  return (
    <section className="register">
      <Greeting title="Добро пожаловать!" />

      <Form
        formClass={'reg-form'}
        submitBtnText={'Зарегистрироваться'}
        footerText={'Уже зарегистрированы?'}
        footerPath={'/signin'}
        footerLinkText={'Войти'}
      >
        <label className="form__label" htmlFor="reg-name">Имя</label>
        <input
          type="text"
          id="reg-name"
          name="reg-name"
          className="form__input"
          placeholder="Введите имя"
          required
        />
        <span className="form__error-text"></span>

        <label className="form__label" htmlFor="reg-email">E-mail</label>
        <input
          type="email"
          id="reg-email"
          name="reg-email"
          className="form__input"
          placeholder="Введите e-mail"
          required
        />
        <span className="form__error-text"></span>

        <label className="form__label" htmlFor="reg-password">Пароль</label>
        <input
          type="password"
          id="reg-password"
          name="reg-password"
          className="form__input"
          placeholder="Введите пароль"
          required
        />
        <span className="form__error-text"></span>
      </Form>
    </section>
  )
}

export default Register