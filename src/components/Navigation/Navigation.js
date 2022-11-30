import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <>
      <nav className='nav'>
        <ul className='nav__list'>
          <li className='nav__item'>
            <a href='f' className='nav__link nav__link_visible_hamburger'>Главная</a>
          </li>
          <li className='nav__item'>
            <a href='f' className='nav__link nav__link_active'>Фильмы</a>
          </li>
          <li className='nav__item'>
            <a href='f' className='nav__link'>Сохранённые фильмы</a>
          </li>
        </ul>
        <a href='f' className='nav__account-link'>Аккаунт</a>
      </nav>
      <div className='hamburger'>
        <span></span>
        <span></span>
        <span></span>
      </div>

    </>

  )
}

export default Navigation