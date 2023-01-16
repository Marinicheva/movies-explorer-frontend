import React from 'react';

import { MOVIES_URL } from '../../utils/constants';
import './MoviesCard.css';

const MoviesCard = ({ movie, btnClassName, onClickMovieBtn }) => {
 const durationHours = Math.floor(movie.duration / 60);
 const durationMinutes = movie.duration % 60;
 const image = typeof movie.image === 'string' ? movie.image : `${MOVIES_URL}${movie.image.url}`;

 const savedClassName = movie.isSaved ? ' movie__save-btn_active' : '';
 const movieBtnClassNames = btnClassName !== 'movie__save-btn' ? btnClassName : (btnClassName + savedClassName);

 const handleClick = () => {
  onClickMovieBtn(movie);
 }

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
     onClick={() => handleClick()}></button>
   <div className="movie__bottom">
    <p className="movie__duration">
     {`${durationHours}ч ${durationMinutes > 9 ? durationMinutes : '0' + durationMinutes}`}
    </p>
   </div>
  </li>
 );
}

export default MoviesCard;