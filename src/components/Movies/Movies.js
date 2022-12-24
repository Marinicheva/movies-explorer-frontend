import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';

import { MOVIES_URL, sortedMovies, checkIsMovieSaved} from "../../utils/constants";

import './Movies.css';

const Movies = ({ isLoading, movies, savedMovies, isLoggedIn, onFirstSearch, onSaveMovie, onDeleteMovie }) => {

 //Здесь храняться найденные фильмы
 // Устанавливая сюда стейт проверять есть ли среди них сохраненные фильмы
 const [renderedMovies, setRenderedMovies] = useState(null);

 // При монтировании компонента проверяем наличие в локалсторэдже найденных фильмов
 useEffect(() => {
  /*
  1. Определяем наличие сохраненного результата поиска: есть - ставим его в стейт фильмов
  2. Определяем наличие сохраненного запроса поиска: есть - фильтруем ставит в рендерируемые и сохраняем в сторэдже
  3. Ничего вышеперечисленного нет - ничего не делаем
  */
  const savedSearchResult = JSON.parse(localStorage.getItem('searchResult'));
  const savedSearchingStr = localStorage.getItem('searchingValue');
  const checkboxValue = JSON.parse(localStorage.getItem('checkboxValue'));

  if (savedSearchResult) {
   const checkSavedMovies = checkIsMovieSaved(savedSearchResult, savedMovies);
   setRenderedMovies(checkSavedMovies);
   return;
  }

   if (savedSearchingStr) {
    const foundMovies = sortedMovies(savedSearchingStr, checkboxValue, movies);
    const checkSavedMovies = checkIsMovieSaved(foundMovies, savedMovies);

    setRenderedMovies(checkSavedMovies);
    localStorage.setItem('searchResult', JSON.stringify(foundMovies));
   }

 }, [movies, savedMovies]);
 
 const onSubmitSearch = (searchStr, isShortFilms) => {

  if (!movies.length) {
   console.log(isShortFilms);
   onFirstSearch();

   localStorage.setItem('searchingValue', searchStr);
   localStorage.setItem('checkboxValue', JSON.stringify(isShortFilms));
  } else {
   const foundMovies = sortedMovies(searchStr, isShortFilms, movies);
   const checkSavedMovies = checkIsMovieSaved(foundMovies, savedMovies);

   localStorage.setItem('searchResult', JSON.stringify(foundMovies));

   setRenderedMovies(checkSavedMovies);
  }
 }

 // Что будем делать при клике на кнопку карточки
 const onClickCardBtn = (movieData) => {
  // Вытащить нужные данные и в зависимости от того сохранен фильм или нет запрос к API на добавление или удаление
  if(!movieData.isSaved) {
   console.log('This movie is not saved');
   const { country, director, duration, year, description, trailerLink, nameRU, nameEN, image, id} = movieData;
   const imageUrl = `${MOVIES_URL}${image.url}`;
   const thumbnail = `${MOVIES_URL}${image.formats.thumbnail.url}`;

   onSaveMovie({country, director, duration, year, description, trailerLink, nameRU, nameEN, thumbnail, image: imageUrl, movieId: id});
  } else {
   console.log('This movie already saved');
   const deletedMovie = savedMovies.find(item => item.movieId === movieData.id);
   console.log(deletedMovie);
   onDeleteMovie(deletedMovie._id);
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
      onClickMovieBtn={(data) => onClickCardBtn(data)}
     />}
   </section>
   <Footer />
  </>
 )
}

export default Movies;
