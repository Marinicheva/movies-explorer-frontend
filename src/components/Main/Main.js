import React from 'react';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';

import './Main.css';

const Main = () => {
  return (
    <main className="content">
      <Promo />
      <AboutProject />
    </main>
  )
}

export default Main