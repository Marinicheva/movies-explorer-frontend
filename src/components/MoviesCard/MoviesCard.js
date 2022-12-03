import React from 'react';
import img from '../../images/movie-img.jpg';

import './MoviesCard.css';

const MoviesCard = ({ isActive }) => {
  const saveBtnClassNames = `movie__save-btn ${isActive && 'movie__save-btn_active'}`;


  return (
    <li className='movies__item movie'>
      <img src={img} alt="Постер фильма" className="movie__img" />
      <h3 className="movie__title">Gimme Danger</h3>
      <button className={saveBtnClassNames}></button>
      <div className="movie__bottom">
        <p className="movie__duration">1ч 42м</p>
      </div>
    </li>
  )
}

export default MoviesCard;