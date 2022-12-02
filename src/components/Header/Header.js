import React from 'react';

import logo from '../../images/logo.png';
import Navigation from '../Navigation/Navigation';
import NavTab from '../NavTab/NavTab';
import './Header.css';

const Header = ({ isLoggedIn }) => {
 return (
    <header className='header header_on_landing'>
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
