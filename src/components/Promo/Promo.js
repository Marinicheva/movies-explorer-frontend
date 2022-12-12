import { HashLink } from 'react-router-hash-link';
import './Promo.css';

const Promo = () => {

  return (
    <section className="promo">
      <div className="promo__text">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <HashLink smooth to="#about-project" className="promo__more-btn">Узнать больше</HashLink>
      </div>
      <div className="promo__earth"></div>
    </section>
  )
}

export default Promo