import { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {

  const menu = useRef();
  const hamburger = useRef();

  const handleCloseMenuByOverlay = useCallback((evt) => {
    if (evt.target === menu.current) {
      menu.current.classList.remove('nav__wrapper_visible');
      hamburger.current.classList.remove('hamburger_opened');
      document.removeEventListener('click', handleCloseMenuByOverlay);
    }
  }, []);

  const handleClickHamburger = () => {
    menu.current.classList.toggle('nav__wrapper_visible');
    hamburger.current.classList.toggle('hamburger_opened');
    document.addEventListener('click', handleCloseMenuByOverlay);
  }

  return (
    <div ref={menu} className='nav__wrapper'>
      <nav  className='nav'>
        <ul className='nav__list'>
          <li className='nav__item'>
            <Link to='/' className='nav__link nav__link_visible_hamburger'>Главная</Link>
          </li>
          <li className='nav__item'>
            <Link to='/movies' className='nav__link nav__link_active'>Фильмы</Link>
          </li>
          <li className='nav__item'>
            <Link to='/saved-movies' className='nav__link'>Сохранённые фильмы</Link>
          </li>
        </ul>
        <Link to='/profile' className='nav__link nav__account-link'>Аккаунт</Link>
      </nav>
      <div ref={hamburger} className='hamburger' onClick={handleClickHamburger}>
        <span></span>
        <span></span>
        <span></span>
      </div>

    </div>

  )
}

export default Navigation