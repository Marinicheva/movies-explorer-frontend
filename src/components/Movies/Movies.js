import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';

import moviesApi from '../../utils/MoviesApi';
import { DEFAULT_API_ERROR_TEXT } from '../../utils//constants';

import './Movies.css';
import Preloader from '../Preloader/Preloader';

const Movies = ({ onOpenPopup }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]); //Здесь хранится ответ от API
  const [findedMovies, setFindedMovies] = useState(null); //Здесь храняться отсортированные фильмы

  useEffect(() => {
    moviesApi.getMovies()
      .then((movies) => setMovies(movies))
      .catch(err => {
        onOpenPopup(DEFAULT_API_ERROR_TEXT);
      })
      .finally(setIsLoading(false));
  }, [onOpenPopup]);

  useEffect(() => {
    const savedSearchResult = JSON.parse(localStorage.getItem('searchResult')) || [];
    setFindedMovies(savedSearchResult);
  }, [])

  // При сабмите поиска => запускаем прелоадер => фильтруем фильмы => отключаем прелоадер
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
      setFindedMovies(searchResult);
      setIsLoading(false);
    }, 500);
  };

  return (
    <>
      <Header isLoggedIn={true} />
      <section className="movies"  >
        <SearchForm onSearchMovies={(searchStr, isShortFilms) => onSearchMovies(searchStr, isShortFilms)} />
        {isLoading
          ? <Preloader />
          : <MoviesCardList
            moviesList={findedMovies}
            movieBtnClassName="movie__save-btn"
          />}
      </section>
      <Footer />
    </>
  )
}

export default Movies;
