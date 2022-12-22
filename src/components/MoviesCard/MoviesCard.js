import React, { useState } from 'react';

import { MOVIES_URL, DEFAULT_MOVIE_DATA } from '../../utils/constants';
import './MoviesCard.css';

const MoviesCard = ({ movieData, btnClassName, onSaveMovie }) => {
  const [ isSaved, setIsSaved ] = useState(false);
  const { nameRU, duration, image, trailerLink } = movieData;
  const durationStr = `${Math.floor(duration / 60)}ч ${duration % 60 > 9 ? duration % 60 : '0' + duration % 60}м`;

  const savedClassName = isSaved ? ' movie__save-btn_active' : '';
  const movieBtnClassNames = btnClassName !== 'movie__save-btn' ? btnClassName : (btnClassName + savedClassName);
  
  const handleClickSaveBtn = () => {
   const {
    country = DEFAULT_MOVIE_DATA,
    director = DEFAULT_MOVIE_DATA,
    year = DEFAULT_MOVIE_DATA,
    description = DEFAULT_MOVIE_DATA,
    nameEN = DEFAULT_MOVIE_DATA
   } = movieData;

   const thumbnailUrl = movieData.image.formats.thumbnail.url;

   const imageUrl = image.url ? `${MOVIES_URL}${image.url}` : DEFAULT_MOVIE_DATA;
   const thumbnail =  thumbnailUrl ? `${MOVIES_URL}${thumbnailUrl}` : DEFAULT_MOVIE_DATA;
   const movieId = movieData.id || DEFAULT_MOVIE_DATA;

   if (!isSaved) {
    onSaveMovie({country, director, year, description, movieId, thumbnail, nameEN, nameRU, duration, trailerLink, image: imageUrl});
   }

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
        src={`${MOVIES_URL}${image?.url}`}
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