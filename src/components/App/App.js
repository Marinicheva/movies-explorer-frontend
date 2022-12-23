import {useCallback, useEffect, useState} from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';
import PopupInfo from '../PopupInfo/PopupInfo';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';

import MainApi from '../../utils/mainApi';

import { POPUP_TYPES, POPUP_MESSAGES, regFormDefaultValues, loginFormDefaultValues } from '../../utils/constants';

import './App.css';
import mainApi from "../../utils/mainApi";
import moviesApi from "../../utils/MoviesApi";

function App() {
 const [loggedIn, setLoggedIn] = useState(false);
 const [currentUser, setCurrentUser] = useState({});

 const [isLoading, setIsLoading] = useState(false);
 const [allMovies, setAllMovies] = useState([]);

 const [isOpenPopup, setIsOpenPopup] = useState(false);
 const [popupText, setPopupText] = useState('');
 const [popupType, setPopupType] = useState('');

 const navigate = useNavigate();

 const setCurrentUserContext = useCallback(() => {
  return MainApi.getUserInfo()
   .then((data) => setCurrentUser({name: data.name, email: data.email}));
 }, []);

 useEffect(() => {
  setCurrentUserContext()
   .then(() => setLoggedIn(true))
   .catch((err) => console.log(err));
 }, [setCurrentUserContext]);

const openPopup = (popupText) => {
 setPopupText(popupText);
 setIsOpenPopup(true);
}

const closePopup = () => {
 setIsOpenPopup(false);
 setPopupText('');
}

const onAuthorizationUser = (userData, resetFormCallback) => {
 MainApi.authorization(userData)
  .then(() => setCurrentUserContext())
  .then(() => {
   setLoggedIn(true);
   navigate('/movies');
   resetFormCallback(loginFormDefaultValues);
  })
  .catch(err => console.log(err.message));
}

const onRegistrationUser = (newUserData, resetFormCallback) => {
 return MainApi
  .registration(newUserData)
  .then((data) => {
   onAuthorizationUser({ email: data.email, password: newUserData.password });
   resetFormCallback(regFormDefaultValues);
  })
  .catch(err => openPopup(err.message));
};

const onSignOut = () => {
 return  MainApi
  .signout()
  .then(() => {
   // TODO: Здесь при успехе: стейт логедИн в фолс и подумать нало ли очистить глобальный стейт
   console.log('Try to signout');
   setLoggedIn(false);
   navigate('/');
  })
};
const onEditUserData = (changedData) => {
 MainApi.updateUserInfo(changedData)
  .then((data) => {
   setCurrentUser({name: data.name, email: data.email});
  })
  .then(() => {
   setPopupType(POPUP_TYPES.info);
   setPopupText(POPUP_MESSAGES.successEditProfile);
   setIsOpenPopup(true);
  })
  .catch(err => {
   setPopupType(POPUP_TYPES.error);
   setPopupText(err.message);
   setIsOpenPopup(true);
  });
}

const onGetAllMovies = () => {
 setIsLoading(true);
 return moviesApi.getMovies()
  .then((movies) => {
   setAllMovies(movies);
   setIsLoading(false);
  })
  .catch((err) => {
   // TODO: Open Popup with error
   console.log(err);
  })
}

const onSaveMovie = (movieData) => {
 mainApi.addMovie(movieData)
  .then(data => setAllMovies(data))
  .catch(err => console.log(err));
}

return (
 <CurrentUserContext.Provider value={currentUser}>
  <div className="App">
   <Routes>
    <Route exact path="/" element={<Main isLoggedIn={loggedIn} />} />
    <Route
      path="/movies"
      element={
       <Movies
        isLoading={isLoading}
        movies={allMovies}
        isLoggedIn={loggedIn}
        onFirstSearch={onGetAllMovies}
        onSaveMovie={(data) => onSaveMovie(data)}
       />}
    />
    <Route path="/saved-movies" element={<SavedMovies />} />
    <Route
     path="/profile"
     element={
      <Profile
       onEditUserData={(data) => onEditUserData(data)}
       onSignout={onSignOut}
      />}
    />

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
