import React from 'react';
import Form from '../Form/Form';
import Greeting from '../Greeting/Greeting';

import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { EMAIL_REGEX } from '../../utils/constants';

import './Register.css';

const Register = () => {
  const regForm = useFormWithValidation();

  const handleChangeInputs = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;

    let errorText;

    if (name === 'name' && value.length < 2) {
      errorText = 'Слишком короткое имя. Длина имени должна быть не менее 2 символов';
    } else if (name === 'email' && !EMAIL_REGEX.test(value)) {
      errorText = 'Некорректный формат e-mail';
    } else if (value.length === 0) {
      errorText = 'Данное поле обязательно для заполнения';
    }
    regForm.handleChange(evt, errorText);
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
        isValid={regForm.isValid}
      >
        <label className="form__label" htmlFor="reg-name">Имя</label>
        <input
          type="text"
          id="reg-name"
          name="name"
          className={`form__input ${regForm.errors.name ? 'form__input_with-error' : ''}`}
          placeholder="Введите имя"
          minLength={2}
          maxLength={30}
          required
          onChange={(evt) => handleChangeInputs(evt)}
        />
        {!regForm.isValid && <span className="form__error-text">{regForm.errors.name}</span>}

        <label className="form__label" htmlFor="reg-email">E-mail</label>
        <input
          type="email"
          id="reg-email"
          name="email"
          className={`form__input ${regForm.errors.email ? 'form__input_with-error' : ''}`}
          placeholder="Введите e-mail"
          required
          onChange={(evt) => handleChangeInputs(evt)}
        />
        {!regForm.isValid && <span className="form__error-text">{regForm.errors.email}</span>}

        <label className="form__label" htmlFor="reg-password">Пароль</label>
        <input
          type="password"
          id="reg-password"
          name="password"
          className={`form__input ${regForm.errors.password ? 'form__input_with-error' : ''}`}
          placeholder="Введите пароль"
          required
          onChange={(evt) => handleChangeInputs(evt)}
        />
        {!regForm.isValid && <span className="form__error-text">{regForm.errors.password}</span>}
      </Form>
    </section>
  )
}

export default Register