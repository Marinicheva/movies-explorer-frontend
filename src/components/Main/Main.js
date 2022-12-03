import React from 'react';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';

import './Main.css';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';

const Main = () => {
  return (
    <div className="content">
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </div>
  )
}

export default Main