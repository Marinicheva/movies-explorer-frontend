import React, { useEffect, useState } from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';
import {MOVIES_URL} from "../../utils/constants";

const MoviesCardList = ({ moviesList, movieBtnClassName, onClickMovieBtn }) => {

  const [deviceWidth, setDeviceWidth] = useState(window.screen.width);
  const [addMoviesCount, setAddMovieCount] = useState(0);

  const [visibleMovies, setVisibleMovies] = useState([]);

  useEffect(() => {
    // Функция для слушателя изменения размера окна
    const handleChangeScreenSize = () => {
      setDeviceWidth(window.screen.width);
    }

    // Определяем количество карточек к отображению
    const count = deviceWidth < 451 ? 5 : deviceWidth < 851 ? 8 : 16;
    setAddMovieCount(count);

    window.addEventListener('resize', handleChangeScreenSize);

    return () => {
      window.removeEventListener('resize', handleChangeScreenSize);
    }

  }, [deviceWidth]);

  useEffect(() => {
    if (moviesList) {
      setVisibleMovies(moviesList.slice(0, addMoviesCount));
    }
  }, [addMoviesCount, moviesList]);


  // Добавляем нужное кол-во карточек в зависимости от размера экрана
  const onShowMore = () => {
    if (deviceWidth < 851) {
      setAddMovieCount(state => state + 2);
    } else {
      setAddMovieCount(state => state + 4);
    }
  }

  // Если нет сохраненных или ничего не найдено
  if (!moviesList || moviesList.length < 1) {
    return <h2 className="movies__empty-list">Ничего не найдено</h2>
  }

  return (
    <>
      <ul className="movies-list">
        { visibleMovies &&
          visibleMovies.map((movie) => {
            return <MoviesCard
             key={movie.id || movie._id}
             movie={movie}
             btnClassName={movieBtnClassName}
             onClickMovieBtn={(data) => onClickMovieBtn(data)}
            />
          })
        }
      </ul>
      { moviesList.length > 15 && visibleMovies.length !== moviesList.length ?
        <button className="movies__more-btn" onClick={onShowMore}>Ещё</button>
       : null
      }
    </>
  )
}

export default MoviesCardList;