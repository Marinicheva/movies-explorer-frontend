const MOVIES_URL = 'https://api.nomoreparties.co';
const MAIN_API_URL = 'https://api.movies.marinich.nomoredomains.club/';

const POPUP_TYPES = {
  error: 'error',
  info: 'info'
};

const POPUP_MESSAGES = {
  defaultApi: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
  successEditProfile: 'Данные успешно изменены',
}
const EMAIL_REGEX = /^[\w-.]+@[\w-]+\.[a-z]{2,4}$/i;
const NAME_REGEX = /^[a-zа-яё\- ]+$/i;

const regFormDefaultValues = {name: '', email: '', password: ''};
const loginFormDefaultValues = {email: '', password: ''};
const defaultCurrentUserData = {name: '', email: ''};

const shortMovieDuration = 40;

const screenSizes = {
  small: 451,
  medium: 851,
}

const visibleMoviesCount = {
  smallScreen: 5,
  mediumScreen: 8,
  defaultCount: 16,
}

// Функция для обработки ответов в fetch
function getResponseData (res) {
  if (!res.ok) {
    return res.json().then((data) => { throw new Error (data.message) });
  }
  return res.json();
}

// Функция поиска фильмов по заданной строке
function searchingMovies (searchValue, arr) {
  return arr.filter(item => item.nameRU.toLowerCase().includes(searchValue.toLowerCase()));
}

// Функция фильтрации фильмов по длительности
function filterShortMovies (arr) {
  return arr.filter(item => item.duration <= shortMovieDuration);
}

// Функция поиска и фильтрации фильмов
function sortedMovies (searchValue, isFilter, arr) {
  let sortedMovies = searchingMovies(searchValue, arr);

  if ( isFilter ) {
    sortedMovies = filterShortMovies(sortedMovies);
  }

  return sortedMovies;
}


// Функция сравнения двух массивов для определения сохраненных фильмов
function checkIsMovieSaved (movies, savedMovies) {
  return movies.map(movie => {
    if ( savedMovies.some(savedMovie => savedMovie.movieId === movie.id) ) {
      movie.isSaved = true;
      movie.savedMovieId = savedMovies._id;
    }

    return movie;
  })
}

export { 
  MOVIES_URL,
  MAIN_API_URL,
  POPUP_TYPES,
  POPUP_MESSAGES,
  EMAIL_REGEX,
  NAME_REGEX,
  regFormDefaultValues,
  loginFormDefaultValues,
  defaultCurrentUserData,
  screenSizes,
  visibleMoviesCount,
  getResponseData,
  sortedMovies,
  checkIsMovieSaved,
};
