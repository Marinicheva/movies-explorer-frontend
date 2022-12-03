import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';

const MoviesCardList = () => {
  return (
    <>
      <ul className='movies__list'>
        {
          [...Array(16)].map((_, i) => {
            return <MoviesCard key={i} isActive={i % 2 === 0} />
          })
        }
      </ul>
      <button className="movie__more-btn">Ещё</button>
    </>
  )
}

export default MoviesCardList;