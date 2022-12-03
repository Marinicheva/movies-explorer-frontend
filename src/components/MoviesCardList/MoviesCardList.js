import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';

const MoviesCardList = () => {

  const arr = [...Array(0)];

  if (arr.length === 0) {
    return <h2 className='movies__empty-list'>Ничего нет</h2>
  }

  return (
    <>
      <ul className='movies__list'>
        {
          arr.map((_, i) => {
            return <MoviesCard key={i} isActive={i % 2 === 0} />
          })
        }
      </ul>
      <button className="movie__more-btn">Ещё</button>
    </>
  )
}

export default MoviesCardList;