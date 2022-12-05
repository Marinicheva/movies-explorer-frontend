import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <>
      <nav className='nav'>
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
      <div className='hamburger'>
        <span></span>
        <span></span>
        <span></span>
      </div>

    </>

  )
}

export default Navigation