import React from 'react';

import logo from '../../images/logo.png';
import Navigation from '../Navigation/Navigation';
import NavTab from '../NavTab/NavTab';
import './Header.css';

const Header = () => {
  // TODO: temporary const for test different view of header
  const loggenIn = true;

  return (
    <header className='header'>
      <a href='f' className='header__logo-link'>
        <img src={logo} alt='Логотип проекта' className='header__logo' />
      </a>
      
        {
          loggenIn ? <Navigation /> : <NavTab />
        }
    </header>
  )
}

export default Header;
