import React from 'react';

import Greeting from '../Greeting/Greeting';
import Form from '../Form/Form';

import { useFormWithValidation } from '../../hooks/useFormWithValidation';

import './Login.css';
import {EMAIL_REGEX, NAME_REGEX} from "../../utils/constants";

const Login = ({ onLogin }) => {

  const loginForm = useFormWithValidation({email: '', password: ''});

  const handleChangeInputs = (evt) => {
      const name = evt.target.name;
      const value = evt.target.value;

      let errorText;

      if (name === 'email' && !EMAIL_REGEX.test(value)) {
          errorText = 'Некорректный формат e-mail';
      } else if (value.length === 0) {
          errorText = 'Данное поле обязательно для заполнения';
      }

      loginForm.handleChange(evt, errorText);
  }

  const handleSubmitLoginForm = (evt) => {
      evt.preventDefault();
      onLogin(loginForm.values, loginForm.resetForm);
  }


  return (
    <section className='login'>
      <Greeting title={"Рады видеть!"} />

      <Form
        formClass="login-form"
        submitBtnText={'Войти'}
        footerText={'Ещё не зарегистрированы?'}
        footerPath={'/signup'}
        footerLinkText={'Регистрация'}
        isValid={loginForm.isValid}
        onSubmit={(evt) => handleSubmitLoginForm(evt)}
      >
        <label htmlFor="email" className="form__label">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={loginForm.values.email}
          onChange={(evt) => handleChangeInputs(evt)}
          className={`form__input ${loginForm.errors.email ? 'form__input_with-error' : ''}`}
          placeholder='Введите e-mail'
          required
        />
        {!loginForm.isValid && <span className="form__error-text">{loginForm.errors.email}</span>}

        <label htmlFor="password" className="form__label">Пароль</label>
        <input
          type="password"
          id="password"
          name="password"
          value={loginForm.values.password}
          onChange={(evt) => handleChangeInputs(evt)}
          className={`form__input ${loginForm.errors.password ? 'form__input_with-error' : ''}`}
          placeholder='Введите пароль'
          required
        />
          {!loginForm.isValid && <span className="form__error-text">{loginForm.errors.password}</span>}
      </Form>
    </section>
  )
}

export default Login