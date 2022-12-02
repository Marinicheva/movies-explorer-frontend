import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className="footer__bottom">
        <p className="footer__year">&#169; 2022</p>
          <p className="footer__author">Мариничева Екатерина</p>
          <a href="https://github.com/Marinicheva" className="footer__link">Github</a>
      </div>
    </footer>
  )
}

export default Footer;