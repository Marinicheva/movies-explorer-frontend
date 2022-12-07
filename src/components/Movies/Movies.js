import React from 'react';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';

import DB from '../../utils/fakeDB.json';

import "./Movies.css";

const Movies = () => {

  return (
    <>
      <Header isLoggedIn={true} />
      <section className='movies'>
        <SearchForm />
        <MoviesCardList moviesList={DB} showSaveOrDeleteBtn='movie__save-btn'  />
      </section>
      <Footer />
    </>
  )
}

export default Movies