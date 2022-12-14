import React from 'react';

import { MOVIES_URL } from '../../utils/constants';
import './MoviesCard.css';

const MoviesCard = ({ movieData, btnClassName }) => {
  const { nameRU, duration, isSaved, image } = movieData;
  const durationStr = `${Math.floor(duration / 60)}ч ${duration % 60 > 9 ? duration % 60 : '0' + duration % 60}м`;

  const movieBtnClassNames = btnClassName !== 'movie__save-btn' ? btnClassName : (btnClassName + (isSaved ? ' movie__save-btn_active' : ''));

  return (
    <li className="movies__item movie">
      <img
        src={`${MOVIES_URL}${image.url}`}
        alt={`Постер фильма "${nameRU}"`}
        className="movie__img"
      />
      <h3 className="movie__title">{nameRU}</h3>
      <button className={movieBtnClassNames}></button>
      <div className="movie__bottom">
        <p className="movie__duration">{durationStr}</p>
      </div>
    </li>
  )
}

export default MoviesCard;