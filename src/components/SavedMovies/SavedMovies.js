import React, {useEffect, useState} from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from "../Preloader/Preloader";
import Footer from '../Footer/Footer';

import './SavedMovies.css';


const SavedMovies = ({ isLoading, movies, isLoggedIn, onMountComponent, onClickMovieBtn }) => {

  useEffect(() => {
    onMountComponent();
  }, []);

  const onClickCardBtn = (movieData) => {
   onClickMovieBtn(movieData._id);
 }

  return (
   <>
     <Header isLoggedIn={isLoggedIn} />
     <section className="saved-movies">
       <SearchForm />
       {
         isLoading
          ? <Preloader />
          : <MoviesCardList
           moviesList={movies}
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