import React, {useEffect, useState} from 'react';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';

import './SavedMovies.css';
import MainApi from "../../utils/mainApi";

const SavedMovies = () => {
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    MainApi.getSavedMovies()
     .then(data => setSavedMovies((data)))
  }, []);

  return (
    <>
    <Header isLoggedIn={true} />
      <section className="saved-movies">
        <SearchForm />
        <MoviesCardList moviesList={savedMovies} movieBtnClassName="movie__delete-btn" />
      </section>
      <Footer />
    </>
  )
}

export default SavedMovies