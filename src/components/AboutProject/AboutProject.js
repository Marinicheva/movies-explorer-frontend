import React from 'react';

import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className='section about-project'>
      <h2 className='section__title'>О проекте</h2>
      <ul className="about-project__list">
        <li className="about-project__item">
          <h3 className="about-project__title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="about-project__item">
          <h3 className="about-project__title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <div className="about-project__chart">
        <div className="about-project__chart-part">
          <span className="about-project__chart-term about-project__chart-term_left">1 неделя</span>
          <span className="about-project__chart-caption">Back-end</span>
        </div>
        <div className="about-project__chart-part">
          <span className="about-project__chart-term about-project__chart-term_right">4 недели</span>
          <span className="about-project__chart-caption">Front-end</span>
        </div>
      </div>
    </section>
  )
}

export default AboutProject