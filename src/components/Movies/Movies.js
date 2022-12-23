import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';

import {sortedMovies} from "../../utils/constants";

import './Movies.css';

const Movies = ({ isLoading, movies, isLoggedIn, onFirstSearch, onSaveMovie }) => {

 // const [isLoading, setIsLoading] = useState(false);
 //Здесь храняться отсортированные фильмы
 const [renderedMovies, setRenderedMovies] = useState(null);

// TODO: Нет прелоадера !!!!

 // При монтировании компонента проверяем наличие в локалсторэдже найденных фильмов
 useEffect(() => {
  /*
  1. Определяем наличие сохраненного результата поиска: есть - ставим его в стейт фильмов
  2. Определяем наличие сохраненного запроса поиска: есть - фильтруем ставит в рендерируемые и сохраняем в сторэдже
  3. Ничего вышеперечисленного нет - ничего не делаем
  */
  const savedSearchResult = JSON.parse(localStorage.getItem('searchResult'));
  const savedSearchingStr = localStorage.getItem('searchingValue');
  const checkboxValue = localStorage.getItem('checkboxValue');

  if (savedSearchResult) {
   setRenderedMovies(savedSearchResult);
   return;
  }

   if (savedSearchingStr) {
    const foundMovies = sortedMovies(savedSearchingStr, checkboxValue, movies);

    setRenderedMovies(foundMovies);
    localStorage.setItem('searchResult', JSON.stringify(foundMovies));
    return;
   }

 }, [movies]);
 
 const onSubmitSearch = (searchStr, isShortFilms) => {

  if (!movies.length) {
   onFirstSearch();

   localStorage.setItem('searchingValue', searchStr);
   localStorage.setItem('checkboxValue', isShortFilms);
  } else {
   const foundMovies = sortedMovies(searchStr, isShortFilms, movies);

   localStorage.setItem('searchResult', JSON.stringify(foundMovies));

   setRenderedMovies(foundMovies);
  }
 }

 return (
  <>
   <Header isLoggedIn={isLoggedIn} />
   <section className="movies"  >
    <SearchForm
     onSearchMovies={(searchStr, isShortFilms) => onSubmitSearch(searchStr, isShortFilms)}
    />
    {isLoading
     ? <Preloader />
     : <MoviesCardList
      moviesList={renderedMovies}
      movieBtnClassName="movie__save-btn"
      onSaveMovie={(data) => onSaveMovie(data)}
     />}
   </section>
   <Footer />
  </>
 )
}

export default Movies;
