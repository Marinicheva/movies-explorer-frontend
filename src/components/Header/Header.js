import React from 'react';

import logo from '../../images/logo.png';
import Navigation from '../Navigation/Navigation';
import NavTab from '../NavTab/NavTab';
import './Header.css';

const Header = ({ isLoggedIn }) => {
  const headerClassNames = `header ${!isLoggedIn ? 'header_on_landing' : ''}`;

  return (
    <header className={headerClassNames}>
      <a href='f' className='header__logo-link'>
        <img src={logo} alt='Логотип проекта' className='header__logo' />
      </a>

      {
        isLoggedIn ? <Navigation /> : <NavTab />
      }
    </header>
  )
}

export default Header;
