import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a href="https://github.com/Marinicheva/how-to-learn" className="portfolio__link" target="blank">
            Статичный сайт
          </a>
          </li>
        <li className="portfolio__item">
          <a href="https://github.com/Marinicheva/russian-travel" className="portfolio__link" target="blank">
            Адаптивный сайт
          </a>
          </li>
        <li className="portfolio__item">
          <a href="https://github.com/Marinicheva/react-mesto-auth" className="portfolio__link" target="blank">
            Одностраничное приложение
          </a>
          </li>
      </ul>
    </section>
  )
}

export default Portfolio;