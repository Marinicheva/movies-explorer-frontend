import {useCallback, useEffect, useState} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';
import PopupInfo from '../PopupInfo/PopupInfo';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import MainApi from '../../utils/mainApi';

import {
 POPUP_TYPES,
 POPUP_MESSAGES,
 regFormDefaultValues,
 loginFormDefaultValues,
 defaultCurrentUserData
} from '../../utils/constants';

import './App.css';
import mainApi from "../../utils/mainApi";
import moviesApi from "../../utils/MoviesApi";

function App() {
 const [loggedIn, setLoggedIn] = useState(false);
 const [currentUser, setCurrentUser] = useState(defaultCurrentUserData);

 const [isLoading, setIsLoading] = useState(false);
 const [savedMovies, setSavedMovies] = useState([]);
 const [allMovies, setAllMovies] = useState([]);


 const [isOpenPopup, setIsOpenPopup] = useState(false);
 const [popupText, setPopupText] = useState('');
 const [popupType, setPopupType] = useState('');

 const navigate = useNavigate();

 const setCurrentUserContext = useCallback(() => {
  return MainApi.getUserInfo()
   .then((data) => setCurrentUser({name: data.name, email: data.email}));
 }, []);

 // При монтировании компонента делаем запрос на получение данных юзера
 // т.о. проверяем хранят ли куки токен
 useEffect(() => {
  setCurrentUserContext()
   .then(() => setLoggedIn(true))
   .then(() => navigate(-1))
   .catch((err) => {
    setPopupType(POPUP_TYPES.error);
    openPopup(err.message);
   });
 }, []);

// Открытие попапа
 const openPopup = (text = POPUP_MESSAGES.defaultApi) => {
  setPopupText(text);
  setIsOpenPopup(true);
 }

// Закрытие попапа
 const closePopup = () => {
  setIsOpenPopup(false);
  setPopupText('');
 }

// Запрос по сабмиту кнопки авторизации
 const onAuthorizationUser = (userData, resetFormCallback) => {
  MainApi.authorization(userData)
   .then(() => setCurrentUserContext())
   .then(() => {
    setLoggedIn(true);
    navigate('/movies');
    resetFormCallback(loginFormDefaultValues);
   })
   .catch(err => {
    setPopupType(POPUP_TYPES.error);
    openPopup(err.message);
   });
 }

// Запрос по сабмиту регистрации
 const onRegistrationUser = (newUserData, resetFormCallback) => {
  return MainApi
   .registration(newUserData)
   .then((data) => {
    onAuthorizationUser({ email: data.email, password: newUserData.password });
    resetFormCallback(regFormDefaultValues);
   })
   .catch(err => {
    setPopupType(POPUP_TYPES.error);
    openPopup(err.message);
   });
 };

// Запрос на разлогин
 const onSignOut = () => {
  return  MainApi
   .signout()
   .then(() => {
    setLoggedIn(false);
    navigate('/');
    setCurrentUser(defaultCurrentUserData);
   })
   .catch(err => {
    setPopupType(POPUP_TYPES.error);
    openPopup(err.message);
   });
 };

// Запрос на редактирование данных юзера
 const onEditUserData = (changedData) => {
  MainApi.updateUserInfo(changedData)
   .then((data) => {
    setCurrentUser({name: data.name, email: data.email});
   })
   .then(() => {
    setPopupType(POPUP_TYPES.info);
    openPopup(POPUP_MESSAGES.successEditProfile)
   })
   .catch(err => {
    setPopupType(POPUP_TYPES.error);
    openPopup(err.message);
   });
 }

// Запрос на получение фильмов с BeatFilms
 const onGetAllMovies = () => {
  setIsLoading(true);
  return moviesApi.getMovies()
   .then((movies) => {
    setAllMovies(movies);
    setIsLoading(false);
   })
   .catch((err) => {
    setPopupType(POPUP_TYPES.error);
    openPopup(err.message);
   })
 }

 // Запрос на добавление фильма в сохраненные
 const onSaveMovie = (movieData) => {
  mainApi.addMovie(movieData)
   .then(data => {
    setSavedMovies(state => ([...state, data]));
   })
   .catch(err => {
    setPopupType(POPUP_TYPES.error);
    openPopup(err.message);
   });
 }

// Запрос на удаление фильма из сохраненных
 const onDeleteMovie = (movieID) => {
  mainApi.deleteMovie(movieID)
   .then(() => {
    return getSavedMovies();
   })
   .catch(err => {
    setPopupType(POPUP_TYPES.error);
    openPopup(err.message);
   });
 };

// Запрос на получение сохраненных фильмов
 const getSavedMovies = () => {
  setIsLoading(true);
  return mainApi.getSavedMovies()
   .then((movies) => {
    setSavedMovies(movies);
   })
   .then(() => setIsLoading(false))
   .catch(err => {
    setPopupType(POPUP_TYPES.error);
    openPopup(err.message);
   });
 }

 return (
  <CurrentUserContext.Provider value={currentUser}>
   <div className="App">
    <Routes>
     <Route exact path="/" element={<Main isLoggedIn={loggedIn} />} />

     <Route
      path="/movies"
      element={
       <ProtectedRoute
        loggedIn={loggedIn}
        element={Movies}
        isLoading={isLoading}
        movies={allMovies}
        savedMovies={savedMovies}
        isLoggedIn={loggedIn}
        onFirstSearch={onGetAllMovies}
        onSaveMovie={(data) => onSaveMovie(data)}
       />}
     />


     <Route
      path="/saved-movies"
      element={
       <ProtectedRoute
        loggedIn={loggedIn}
        element={SavedMovies}
        isLoading={isLoading}
        movies={savedMovies}
        isLoggedIn={loggedIn}
        onMountComponent={getSavedMovies}
        onClickMovieBtn={(id) => onDeleteMovie(id)}
       />}
     />


     <Route
      path="/profile"
      element={
       <ProtectedRoute
        loggedIn={loggedIn}
        element={Profile}
        onEditUserData={(data) => onEditUserData(data)}
        onSignout={onSignOut}
       />
      }/>

    <Route
     path="/signin"
     element={
      <Login
       onLogin={(data, resetFormCallback) => onAuthorizationUser(data, resetFormCallback)}
      />}
    />

    <Route
     path="/signup"
     element={
      <Register
       onRegistration={(data, resetFormCallback) => onRegistrationUser(data, resetFormCallback)}
      />}
    />

    <Route path="*" element={<NotFound />} />
   </Routes>

   <PopupInfo
    popupType={popupType}
    popupText={popupText}
    isOpen={isOpenPopup}
    onClose={closePopup}
   />
  </div>
</CurrentUserContext.Provider>
);
}

export default App;
