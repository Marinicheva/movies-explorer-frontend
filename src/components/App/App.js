import {useEffect, useState} from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

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
 const [isOpenPopup, setIsOpenPopup] = useState(false);
 const [popupErrorText, setPopupErrorText] = useState('');

 const navigate = useNavigate();

 useEffect(() => {

 }, []);

 const openPopup = (errorText) => {
  setPopupErrorText(errorText);
  setIsOpenPopup(true);
 }

 const closePopup = () => {
  setIsOpenPopup(false);
  setPopupErrorText('');
 }

 // TODO: При успешной авторизации записать данные юзера в глобальный контекст
 const onAuthorizationUser = (data, resetFormCallback) => {
  MainApi.authorization(data)
   .then(() => {
    navigate('/movies');
    resetFormCallback(loginFormDefaultValues);
   })
   .catch(err => console.log(err.message));
 }

 const onRegistrationUser = (newUserData, resetFormCallback) => {
  return MainApi
   .registration(newUserData)
   .then((data) => {
    // TODO: Remove log after this line
    console.log('Now we will try to authorization');
    // При успехе сразу запрос на авторизацию и чистим форму
    onAuthorizationUser({ email: data.email, password: newUserData.password });
    resetFormCallback(regFormDefaultValues);
   })
   .catch(err => openPopup(err.message));
 };

 return (
  <div className="App">
   <Routes>
    <Route exact path="/" element={<Main />} />
    <Route path="/movies" element={<Movies onOpenPopup={openPopup} />} />
    <Route path="/saved-movies" element={<SavedMovies />} />
    <Route path="/profile" element={<Profile />} />
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
   <PopupError errorMessage={popupErrorText} isOpen={isOpenPopup} onClose={closePopup} />
  </div>
 );
}

export default App;
