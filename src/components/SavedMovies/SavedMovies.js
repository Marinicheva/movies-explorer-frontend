import React from 'react';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';

import "./SavedMovies.css";

import DB from '../../utils/fakeDB.json';

const SavedMovies = () => {

  const savedMovies = DB.filter(item => item.isSaved);

  return (
    <>
    <Header isLoggedIn={true} />
      <section className='saved-movies'>
        <SearchForm />
        <MoviesCardList moviesList={savedMovies} showSaveOrDeleteBtn='movie__delete-btn' />
      </section>
      <Footer />
    </>
  )
}

export default SavedMovies