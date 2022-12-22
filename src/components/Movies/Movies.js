import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';

import moviesApi from '../../utils/MoviesApi';
import { POPUP_MESSAGES } from '../../utils/constants';

import './Movies.css';
import Preloader from '../Preloader/Preloader';

const Movies = ({ isLoggedIn, onOpenPopup, onSaveMovie }) => {
  const [isLoading, setIsLoading] = useState(true);

  const [movies, setMovies] = useState([]); //Здесь хранится ответ от API
  const [foundMovies, setFoundMovies] = useState(null); //Здесь храняться отсортированные фильмы

  useEffect(() => {
    setIsLoading(true);

    moviesApi.getMovies()
      .then((movies) => setMovies(movies))
      .catch(err => {
        onOpenPopup(POPUP_MESSAGES.defaultApi);
      })
      .finally(() => setIsLoading(false));
  }, [onOpenPopup]);

  useEffect(() => {
    const savedSearchResult = JSON.parse(localStorage.getItem('searchResult')) || [];
    setFoundMovies(savedSearchResult);
  }, [])

  //TODO При сабмите поиска => запускаем прелоадер => фильтруем фильмы => отключаем прелоадер
  const onSearchMovies = (searchStr, isShortFilms) => {
    setIsLoading(true);

    // TODO: Оставлять ли таймаут ???
    setTimeout(() => {
      const searchResult = movies.filter((item) => {
        return (
          (isShortFilms ? item.duration <= 40 : true)
          && item.nameRU.toLowerCase().includes(searchStr.toLowerCase())
        )
      });

      localStorage.setItem('searchResult', JSON.stringify(searchResult));
      setFoundMovies(searchResult);
      setIsLoading(false);
    }, 500);
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <section className="movies"  >
        <SearchForm
          onSearchMovies={(searchStr, isShortFilms) => onSearchMovies(searchStr, isShortFilms)}
        />
        {isLoading
          ? <Preloader />
          : <MoviesCardList
            moviesList={foundMovies}
            movieBtnClassName="movie__save-btn"
            onSaveMovie={(data) => onSaveMovie(data)}
          />}
      </section>
      <Footer />
    </>
  )
}

export default Movies;
