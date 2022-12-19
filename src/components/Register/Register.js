import React from 'react';
import Form from '../Form/Form';
import Greeting from '../Greeting/Greeting';

import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { EMAIL_REGEX, NAME_REGEX, regFormDefaultValues  } from '../../utils/constants';

import './Register.css';

const Register = ({ onRegistration }) => {
  const regForm = useFormWithValidation({name: '', email: '', password: ''});

  const handleChangeInputs = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;

    let errorText;

    if (name === 'name' && !NAME_REGEX.test(value)) {
      errorText = 'Имя может содержать только латиницу, кириллицу, пробел и дефис';
    }else if (name === 'name' && value.length < 2) {
      errorText = 'Слишком короткое имя. Длина имени должна быть не менее 2 символов';
    } else if (name === 'email' && !EMAIL_REGEX.test(value)) {
      errorText = 'Некорректный формат e-mail';
    } else if (value.length === 0) {
      errorText = 'Данное поле обязательно для заполнения';
    }

    regForm.handleChange(evt, errorText);
  }

  const onSubmitForm = (evt) => {
    evt.preventDefault();
    onRegistration(regForm.values)
    .then(() => {
      console.log('try to reset from');
      regForm.resetForm(regFormDefaultValues);
  });
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
        onSubmit={onSubmitForm}
      >
        <label className="form__label" htmlFor="reg-name">Имя</label>
        <input
          type="text"
          id="reg-name"
          name="name"
          value={regForm.values.name}
          className={`form__input ${regForm.errors.name ? 'form__input_with-error' : ''}`}
          placeholder="Введите имя"
          minLength={2}
          maxLength={30}
          required
          onChange={(evt) => handleChangeInputs(evt)}
        />
        {!regForm.isValid && <span className="form__error-text">{regForm.errors.name}</span> 
      }

        <label className="form__label" htmlFor="reg-email">E-mail</label>
        <input
          type="email"
          id="reg-email"
          name="email"
          value={regForm.values.email}
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
          value={regForm.values.password}
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