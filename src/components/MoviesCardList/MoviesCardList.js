import React, { useEffect, useState } from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';

const MoviesCardList = ({ moviesList, movieBtnClassName }) => {
  const [deviceWidth, setDeviceWidth] = useState(window.screen.width);

  useEffect(() => {
    const handleChangeScreenSize = () => {
      setDeviceWidth(window.screen.width);
    }

    window.addEventListener('resize', handleChangeScreenSize);

    return () => {
      window.removeEventListener('resize', handleChangeScreenSize);
    }

  }, [deviceWidth]);


  if (!moviesList) {
    return <h2 className="movies__empty-list">Ничего нет</h2>
  }

  const moviesCount = deviceWidth < 451 ? 5 : deviceWidth < 851 ? 8 : 16;
  const visibleMovies = moviesCount ? moviesList.slice(0, moviesCount) : moviesList;

  return (
    <>
      <ul className="movies-list">
        {
          visibleMovies.map((item) => {
            return <MoviesCard key={item.id} movieData={item} btnClassName={movieBtnClassName} />
          })
        }
      </ul>
      { moviesList.length > 15 && <button className="movies__more-btn">Ещё</button> }
    </>
  )
}

export default MoviesCardList;