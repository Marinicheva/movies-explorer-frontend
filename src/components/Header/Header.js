import React from 'react';

import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
  // TODO: temporary const for test different view of header
  const loggenIn = false;

  return (
    <header className='header'>
      <a href='f' className='header__logo-link'>
        <img src={logo} alt='Логотип проекта' className='header__logo' />
      </a>
      <nav className='nav'>
        <ul className='nav__list'>
          {
            loggenIn && (
              <>
                <li className='nav__item'>
                  <a href='f' className='nav__link nav__link_active'>Фильмы</a>
                </li>
                <li className='nav__item'>
                  <a href='f' className='nav__link'>Сохранённые фильмы</a>
                </li>
                <li className='nav__item'>
                  <a href='f' className='nav__link nav__link_dir_account'>Аккаунт</a>
                </li>
              </>
            )
          }
          {
            !loggenIn && (
              <>
                <li className='nav__item'>
                  <a href="f" className="nav__link nav__link_signup">Регистрация</a>
                </li>
                <li className='nav__item'>
                  <a href="f" className="nav__link nav__link_signin">Войти</a>
                </li>
              </>
            )
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header;
