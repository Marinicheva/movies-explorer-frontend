import React, { useState } from 'react';

import { MOVIES_URL } from '../../utils/constants';
import './MoviesCard.css';

const MoviesCard = ({ movieData, btnClassName }) => {
  const [ isSaved, setIsSaved ] = useState(false);
  const { nameRU, duration, image, trailerLink } = movieData;
  const durationStr = `${Math.floor(duration / 60)}ч ${duration % 60 > 9 ? duration % 60 : '0' + duration % 60}м`;

  const savedClassName = isSaved ? ' movie__save-btn_active' : '';
  const movieBtnClassNames = btnClassName !== 'movie__save-btn' ? btnClassName : (btnClassName + savedClassName);
  
  const handleClickSaveBtn = () => {
    // Послать соответвующий запрос в зав-сти от того сохранен или нет
    setIsSaved(state => !state);
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
      <button className={movieBtnClassNames} onClick={handleClickSaveBtn}></button>
      <div className="movie__bottom">
        <p className="movie__duration">{durationStr}</p>
      </div>
    </li>
  )
}

export default MoviesCard;