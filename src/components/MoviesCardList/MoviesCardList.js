import React, { useEffect, useState } from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';

const MoviesCardList = ({ moviesList, movieBtnClassName }) => {
   const [deviceWidth, setDeviceWidth] = useState(window.screen.width);
  const [addMoviesCount, setAddMovieCount] = useState(0);
  const [visibleMovies, setVisibleMovies] = useState(null);  

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
    if (deviceWidth < 451) {
      setAddMovieCount(state => state + 2);
    } else if (deviceWidth < 851) {
      setAddMovieCount(state => state + 3);
    } else {
      setAddMovieCount(state => state + 4);
    }
  }


  if (!moviesList || moviesList.length < 1) {
    return <h2 className="movies__empty-list">Ничего не найдено</h2>
  }

  return (
    <>
      <ul className="movies-list">
        { visibleMovies &&
          visibleMovies.map((item) => {
            return <MoviesCard key={item.id} movieData={item} btnClassName={movieBtnClassName} />
          })
        }
      </ul>
      { moviesList.length > 15 && <button className="movies__more-btn" onClick={onShowMore}>Ещё</button> }
    </>
  )
}

export default MoviesCardList;