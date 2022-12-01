import React from 'react';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';

import './Main.css';
import Techs from '../Techs/Techs';

const Main = () => {
  return (
    <main className="content">
      <Promo />
      <AboutProject />
      <Techs />
    </main>
  )
}

export default Main