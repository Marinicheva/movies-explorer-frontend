import {useEffect, useState} from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';
import PopupError from '../PopupError/PopupError';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';

import MainApi from '../../utils/mainApi';

import { regFormDefaultValues, loginFormDefaultValues } from '../../utils/constants';

import './App.css';

function App() {
 const [loggedIn, setLoggedIn] = useState(false);
 const [currentUser, setCurrentUser] = useState({});
 const [isOpenPopup, setIsOpenPopup] = useState(false);
 const [popupErrorText, setPopupErrorText] = useState('');

 const navigate = useNavigate();

 useEffect(() => {
  MainApi
   .getUserInfo()
   .then((data) => {
    setCurrentUser({name: data.name, email: data.email})
   })
   .catch((err) => console.log(err));
 }, []);

const openPopup = (errorText) => {
 setPopupErrorText(errorText);
 setIsOpenPopup(true);
}

const closePopup = () => {
 setIsOpenPopup(false);
 setPopupErrorText('');
}

const onAuthorizationUser = (userData, resetFormCallback) => {
 MainApi.authorization(userData)
  .then((data) => {
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
   // При успехе сразу запрос на авторизацию и чистим форму
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
}

return (
 <CurrentUserContext.Provider value={currentUser}>
  <div className="App">
   <Routes>
    <Route exact path="/" element={<Main isLoggedIn={loggedIn} />} />
    <Route path="/movies" element={<Movies isLoggedIn={loggedIn} onOpenPopup={openPopup} />} />
    <Route path="/saved-movies" element={<SavedMovies />} />
    <Route
     path="/profile"
     element={
      <Profile
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

   <PopupError
    errorMessage={popupErrorText}
    isOpen={isOpenPopup}
    onClose={closePopup}
   />
  </div>
 </CurrentUserContext.Provider>
);
}

export default App;
