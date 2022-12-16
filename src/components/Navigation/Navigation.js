import { useCallback, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './Navigation.css';

const Navigation = () => {

  const menu = useRef();
  const hamburger = useRef();

  const handleCloseMenuByOverlay = useCallback((evt) => {
    if (evt.target === menu.current) {
      menu.current.classList.remove('nav-wrapper_visible');
      hamburger.current.classList.remove('hamburger_opened');
      document.removeEventListener('click', handleCloseMenuByOverlay);
    }
  }, []);

  const handleClickHamburger = () => {
    menu.current.classList.toggle('nav-wrapper_visible');
    hamburger.current.classList.toggle('hamburger_opened');
    document.addEventListener('click', handleCloseMenuByOverlay);
  }

  return (
    <div ref={menu} className="nav-wrapper">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink
              to="/"
              className={({ isActive }) => (`nav__link_visible_hamburger nav__link ${isActive ? 'nav__link_active' : ''}`)}
            >
              Главная
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/movies"
              className={({ isActive }) => (`nav__link ${isActive ? 'nav__link_active' : ''}`)}
            >
              Фильмы
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/saved-movies"
              className={({ isActive }) => (`nav__link ${isActive ? 'nav__link_active' : ''}`)}
            >
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <Link to="/profile" className="nav__link nav__account-link">Аккаунт</Link>
      </nav>
      <div ref={hamburger} className="hamburger" onClick={handleClickHamburger}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

  )
}

export default Navigation