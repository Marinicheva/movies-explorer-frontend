import React, { useState } from 'react';
import Form from '../Form/Form';

import Greeting from '../Greeting/Greeting';

import './Register.css';

const Register = () => {
  const [newUserData, setNewUserData] = useState({name: '', email: '', password: ''});

  const handleChangeInputs = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;

    setNewUserData(state => ({...state, [name]: value}));
  }


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
          name="name"
          value={newUserData.name}
          className="form__input"
          placeholder="Введите имя"
          minLength={2}
          maxLength={30}
          required
          onChange={(evt) => {handleChangeInputs(evt)}}
        />
        <span className="form__error-text"></span>

        <label className="form__label" htmlFor="reg-email">E-mail</label>
        <input
          type="email"
          id="reg-email"
          name="email"
          value={newUserData.email}
          className="form__input"
          placeholder="Введите e-mail"
          required
          onChange={(evt) => {handleChangeInputs(evt)}}
        />
        <span className="form__error-text"></span>

        <label className="form__label" htmlFor="reg-password">Пароль</label>
        <input
          type="password"
          id="reg-password"
          name="password"
          value={newUserData.password}
          className="form__input"
          placeholder="Введите пароль"
          required
          onChange={(evt) => {handleChangeInputs(evt)}}
        />
        <span className="form__error-text"></span>
      </Form>
    </section>
  )
}

export default Register