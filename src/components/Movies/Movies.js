import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';

import DB from '../../utils/fakeDB.json';

import './Movies.css';
import Preloader from '../Preloader/Preloader';

const Movies = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Header isLoggedIn={true} />
      <section className="movies"  >
        <SearchForm />
        { isLoading ? <Preloader /> : <MoviesCardList moviesList={DB} movieBtnClassName="movie__save-btn"  /> }
      </section>
      <Footer />
    </>
  )
}

export default Movies