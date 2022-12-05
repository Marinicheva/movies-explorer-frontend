import React from 'react';
import logo from '../../images/logo.png';

import './Register.css';

const Register = () => {
  return (
    <section className='register'>
      <div className="register__top">
      <a href='f' className='logo__link'>
        <img src={logo} alt='Логотип проекта' className='logo' />
      </a>
      <h1 className='register__title'>Добро пожаловать!</h1>
      </div>
      <form className="register__form reg-form">
        <label className="reg-form__label" htmlFor='reg-name'>Имя</label>
        <input type="text" id="reg-name" name="reg-name" className="reg-form__input" placeholder='Введите Ваше имя' />
        <span className="reg-form__input-error"></span>

        <label className="reg-form__label" htmlFor='reg-email'>E-mail</label>
        <input type="email" id="reg-email" name="reg-email" className="reg-form__input" placeholder='Введите Ваш e-mail' />
        <span className="reg-form__input-error"></span>

        <label className="reg-form__label" htmlFor='reg-password'>Пароль</label>
        <input type="password" id="reg-password" name="reg-password" className="reg-form__input" placeholder='Введите пароль' />
        <span className="reg-form__input-error"></span>

        <button type="submit" className="reg-form__submit">Зарегистрироваться</button>
      </form>
      <div className="register__bottom">
        <p className="register__bottom-text">Уже зарегистрированы?</p>
        <a href="f" className="register__bottom-back">Войти</a>
      </div>
    </section>
  )
}

export default Register