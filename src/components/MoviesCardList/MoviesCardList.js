import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';

const MoviesCardList = ({ moviesList, showSaveOrDeleteBtn }) => {

  if (!moviesList) {
    return <h2 className='movies__empty-list'>Ничего нет</h2>
  }

  return (
    <>
      <ul className='movies__list'>
        {
          moviesList.map((item) => {
            return <MoviesCard key={item.id} movieData={item} btnClassName={showSaveOrDeleteBtn} />
          })
        }
      </ul>
      { moviesList.length > 15 && <button className="movie__more-btn">Ещё</button> }
    </>
  )
}

export default MoviesCardList;