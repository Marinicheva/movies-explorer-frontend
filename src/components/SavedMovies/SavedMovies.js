import React, {useEffect, useState} from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from "../Preloader/Preloader";
import Footer from '../Footer/Footer';
import { sortedMovies } from '../../utils/constants';

import './SavedMovies.css';

const SavedMovies = ({ isLoading, movies, isLoggedIn, onClickMovieBtn }) => {
 const [renderedMovies, setRenderedMovies] = useState([]);
 const [isMoviesFound, setIsMoviesFound] = useState(true);

  useEffect(() => {
   if (movies) {
    setRenderedMovies(movies);
   }
  }, [movies]);

  const onClickCardBtn = (movieData) => {
   onClickMovieBtn(movieData._id);
 }

 const onSearchSubmit = (searchingValue, checkboxValue) => {
   const filteredMovies = sortedMovies(searchingValue, checkboxValue, movies);
   setRenderedMovies(filteredMovies);

   if (filteredMovies.length < 1) {
    setIsMoviesFound(false);
   } else {
    setIsMoviesFound(true);
   }
 }

  return (
   <>
     <Header isLoggedIn={isLoggedIn} />
     <section className="saved-movies">
       <SearchForm
        onSearchMovies={(searchingValue, checkboxValue) => onSearchSubmit(searchingValue, checkboxValue)}
        isInputRequired={false}
       />
       {
         isLoading
          ? <Preloader />
          : <MoviesCardList
           moviesList={renderedMovies}
           isMoviesFound={isMoviesFound}
           movieBtnClassName="movie__delete-btn"
           onClickMovieBtn={(data) => onClickCardBtn(data)}
          />
       }

     </section>
     <Footer />
   </>
  )
}

export default SavedMovies