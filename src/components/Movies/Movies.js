import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';

import { MOVIES_URL, sortedMovies, checkIsMovieSaved} from "../../utils/constants";

import './Movies.css';

const Movies = ({
                 isLoading,
                 movies,
                 savedMovies,
                 isLoggedIn,
                 onFirstSearch,
                 onSaveMovie,
                 onDeleteMovie
}) => {

 //Здесь храняться найденные, отфильтрованные, отсортированные фильмы
 const [renderedMovies, setRenderedMovies] = useState([]);
 const [isMoviesFound, setIsMoviesFound] = useState(true);

 // При монтировании компонента проверяем наличие в локалсторэдже найденных фильмов
 useEffect(() => {

  const savedSearchResult = JSON.parse(localStorage.getItem('searchResult'));
  const savedSearchingStr = localStorage.getItem('searchStrValue');
  const checkboxValue = JSON.parse(localStorage.getItem('checkboxMoviesValue'));

  if (savedSearchResult) {
   // Уже есть что отборазить -> сохраненные в сторэдже фильмы
   const checkSavedMovies = checkIsMovieSaved(savedSearchResult, savedMovies);
   setRenderedMovies(checkSavedMovies);
  } else if (savedSearchingStr) {
   // Поиск был, в сторэдже есть искомая строка -> выполним поиск, сортировку и проверку на сохранение массива от BeatFilms
   const foundMovies = sortedMovies(savedSearchingStr, checkboxValue, movies);
   const checkSavedMovies = checkIsMovieSaved(foundMovies, savedMovies);

   setRenderedMovies(checkSavedMovies);
   saveFoundMovies(foundMovies);
  }
 }, [movies, savedMovies]);

 const onSubmitSearch = (searchStr, isShortFilms) => {
  // Сохраним искомую строку и состояние чек-бокса в сторэдж
  onChangeSearchStrValue(searchStr);
  onChangeCheckboxValue(isShortFilms);

  // Если длина массива равна 0, этот поиск будет первым -> нужен запрос к API BeatFilms
  if (!movies.length) {
   onFirstSearch();
  } else {
   // Если массив от BeatFilms не пустой, найдем и отсортируем его
   const foundMovies = sortedMovies(searchStr, isShortFilms, movies);
   const checkSavedMovies = checkIsMovieSaved(foundMovies, savedMovies);

   // Сохраним найденные фильмы в сторэдж
   saveFoundMovies(foundMovies);
   // И в стейт для рендера
   setRenderedMovies(checkSavedMovies);

   if (checkSavedMovies.length < 1) {
    setIsMoviesFound(false);
   } else {
    setIsMoviesFound(true);
   }
  }
 }

 // Функции для сохранения данных в сторэдже
 const onChangeSearchStrValue = (value) => {
  localStorage.setItem('searchStrValue', value);
 }

 const onChangeCheckboxValue = (value) => {
  localStorage.setItem('checkboxMoviesValue', JSON.stringify(value));
 }

 const saveFoundMovies = (movies) => {
  localStorage.setItem('searchResult', JSON.stringify(movies));
 }

 // При клике по кнопке в карточке фильма
 const onClickCardBtn = (movieData) => {

  if(!movieData.isSaved) {
   // Если фильм еще не сохранен -> соберем необходимые для запроса данные
   const data = {
    country: movieData.country,
    director: movieData.director,
    duration: movieData.duration,
    year: movieData.year,
    description: movieData.description,
    trailerLink: movieData.trailerLink,
    nameRU: movieData.nameRU,
    nameEN: movieData.nameEN,
   }
   const {image, id} = movieData;
   data.image = `${MOVIES_URL}${image.url}`;
   data.thumbnail = `${MOVIES_URL}${image.formats.thumbnail.url}`;

   // Передадим данные в соответвующую функцию
   onSaveMovie({...data, movieId: id});
  } else {
   // Если фильм сохранен -> по id BeatFilm найдем его id в БД
   const deletedMovie = savedMovies.find(item => item.movieId === movieData.id);
   // Передадим этот id в метод, отправляющий запрос на удаление
   onDeleteMovie(deletedMovie._id);
  }
 }

 return (
  <>
   <Header isLoggedIn={isLoggedIn} />
   <section className="movies"  >
    <SearchForm
     inputValueStorageName={'searchStrValue'}
     checkboxValueStorageName={'checkboxMoviesValue'}
     onSearchMovies={(searchStr, isShortFilms) => onSubmitSearch(searchStr, isShortFilms)}
     onChangeSearchStrValue={(value) => onChangeSearchStrValue(value)}
     onChangeCheckboxValue={(value) => onChangeCheckboxValue(value)}
     isInputRequired={true}
    />
    {isLoading
     ? <Preloader />
     : <MoviesCardList
      moviesList={renderedMovies}
      isMoviesFound={isMoviesFound}
      movieBtnClassName="movie__save-btn"
      onClickMovieBtn={(data) => onClickCardBtn(data)}
     />}
   </section>
   <Footer />
  </>
 )
}

export default Movies;
