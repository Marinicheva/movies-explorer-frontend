import React from 'react';

import avatar from '../../images/student_foto.jpg';

import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section className="section about-me">
      <h2 className="section__title">Студент</h2>
      <div className="about-me__content">
        <div className="about-me__text">
          <h3 className="about-me__name">Екатерина</h3>
          <p className="about-me__summary">Фронтенд-разработчик, 32 года</p>
          <p className="about-me__description">Я родилася и живу в Калуге, закончил факультет экономики Финуниверситета. У меня есть муж
            и дочь. Я люблю читать, а ещё увлекаюсь вязанием. Недавно начала кодить. С 2013 года работала в снабжении. После того, как завершения курса по веб-разработке планирую свою жизнь плотно связать с кодингом и веб-разработкой.</p>
          <a href="https://github.com/Marinicheva" className="about-me__git-link">Github</a>
        </div>
        <img src={avatar} alt="Портретное фото студента" className="about-me_photo" />
      </div>
    </section>
  )
}

export default AboutMe