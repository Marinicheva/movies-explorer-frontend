import React from 'react';

import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import NavTab from '../NavTab/NavTab';

import './Header.css';

const Header = ({ isLoggedIn, withBg }) => {
  const headerClassNames = `header ${withBg ? "header_on_landing" : ''}`;

  return (
    <header className={headerClassNames}>
      <Logo />
      {
        isLoggedIn ? <Navigation /> : <NavTab />
      }
    </header>
  )
}

export default Header;
