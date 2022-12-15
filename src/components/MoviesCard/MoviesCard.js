import React from 'react';

import { MOVIES_URL } from '../../utils/constants';
import './MoviesCard.css';

const MoviesCard = ({ movieData, btnClassName }) => {
  const { nameRU, duration, isSaved, image, trailerLink } = movieData;
  const durationStr = `${Math.floor(duration / 60)}ч ${duration % 60 > 9 ? duration % 60 : '0' + duration % 60}м`;

  const movieBtnClassNames = btnClassName !== 'movie__save-btn' ? btnClassName : (btnClassName + (isSaved ? ' movie__save-btn_active' : ''));
  
  const click = (evt) => {
    console.log(evt.target);
  }

  return (
    <li className="movies__item movie">
      <a
        href={trailerLink}
        className="movie__link"
        target="blank"
        rel="noopener noreferrer"
      >
        {`Ссылка на трейлер фильма ${nameRU} на видеохостинге Youtube`}
      </a>
      <img
        src={`${MOVIES_URL}${image.url}`}
        alt={`Постер фильма "${nameRU}"`}
        className="movie__img"
      />
      <h3 className="movie__title">{nameRU}</h3>
      <button className={movieBtnClassNames} onClick={(evt) => click(evt)}></button>
      <div className="movie__bottom">
        <p className="movie__duration">{durationStr}</p>
      </div>
    </li>
  )
}

export default MoviesCard;