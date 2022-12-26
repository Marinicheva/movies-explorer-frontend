import React, {useEffect, useState} from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from "../Preloader/Preloader";
import Footer from '../Footer/Footer';
import { sortedMovies } from '../../utils/constants';

import './SavedMovies.css';

const SavedMovies = ({ isLoading, movies, isLoggedIn, onMountComponent, onClickMovieBtn }) => {

 const [renderedMovies, setRenderedMovies] = useState(movies);

  useEffect(() => {
    onMountComponent();
  }, []);

  const onClickCardBtn = (movieData) => {
   onClickMovieBtn(movieData._id);
 }

 const onSearchSubmit = (searchingValue, checkboxValue) => {
   const filteredMovies = sortedMovies(searchingValue, checkboxValue, movies);
   setRenderedMovies(filteredMovies);
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