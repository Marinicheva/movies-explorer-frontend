import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';

import moviesApi from '../../utils/MoviesApi';

import './Movies.css';
import Preloader from '../Preloader/Preloader';

const Movies = () => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ movies, setMovies ] = useState([]);
  const [ visibleMovies, setVisibleMovies ] = useState(null);

  useEffect(() => {
    moviesApi.getMovies()
      .then((movies) => setMovies(movies))
      .then(() => setIsLoading(false));
  }, []);

  const onSearchMovies = (searchStr, isShortFilms) => {
    setVisibleMovies(movies.filter(item => {
      return (
        (isShortFilms
        ? item.duration <= 40 
        : item)
        && item.nameRU.toLowerCase().includes(searchStr.toLowerCase())
      );
    }));
  };

  return (
    <>
      <Header isLoggedIn={true} />
      <section className="movies"  >
        <SearchForm onSearchMovies={(searchStr, isShortFilms) => onSearchMovies(searchStr, isShortFilms)} />
        { isLoading
        ? <Preloader />
        : <MoviesCardList
            moviesList={visibleMovies}
            movieBtnClassName="movie__save-btn"
          /> }
      </section>
      <Footer />
    </>
  )
}

export default Movies;
