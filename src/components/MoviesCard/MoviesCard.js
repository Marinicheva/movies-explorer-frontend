import React, { useState } from 'react';

import { MOVIES_URL, DEFAULT_MOVIE_DATA } from '../../utils/constants';
import './MoviesCard.css';

const MoviesCard = ({ movie, btnClassName, onClickMovieBtn }) => {
 const durationHours = Math.floor(movie.duration / 60);
 const durationMinutes = movie.duration % 60;
 const image = typeof movie.image === 'string' ? movie.image : `${MOVIES_URL}${movie.image.url}`;

 const savedClassName = movie.isSaved ? ' movie__save-btn_active' : '';
 const movieBtnClassNames = btnClassName !== 'movie__save-btn' ? btnClassName : (btnClassName + savedClassName);

 return (
  <li className="movies__item movie">
   <a
    href={movie.trailerLink}
    className="movie__link"
    target="blank"
    rel="noopener noreferrer"
   >
    {`Ссылка на трейлер фильма ${movie.nameRU} на видеохостинге Youtube`}
   </a>
   <img
    src={image}
    alt={`Постер фильма "${movie.nameRU}"`}
    className="movie__img"
   />
   <h3 className="movie__title">{movie.nameRU}</h3>
   <button
     className={movieBtnClassNames}
     onClick={() => onClickMovieBtn(movie)}></button>
   <div className="movie__bottom">
    <p className="movie__duration">
     {`${durationHours}ч ${durationMinutes > 9 ? durationMinutes : '0' + durationMinutes}`}
    </p>
   </div>
  </li>
 );
}

// Клик по кнопках на разных страницах делает разное, сл-но надо данные карточки поднимать выше
/* const handleClickSaveBtn = () => {

  const thumbnailUrl = movieData.image.formats.thumbnail.url;

  const imageUrl = movieImage ? `${MOVIES_URL}${movieImage}` : DEFAULT_MOVIE_DATA;
  const thumbnail =  thumbnailUrl ? `${MOVIES_URL}${thumbnailUrl}` : DEFAULT_MOVIE_DATA;
  const movieId = movieData.id || DEFAULT_MOVIE_DATA;

  if (!isSaved) {
   onSaveMovie({movieData.country, movieData.director, year, description, movieId, thumbnail, nameEN, nameRU, duration, trailerLink, image: imageUrl});
  }

   setIsSaved(state => !state);
 }*/

export default MoviesCard;