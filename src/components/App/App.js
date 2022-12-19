import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';
import PopupError from '../PopupError/PopupError';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';

import MainApi from '../../utils/mainApi';

import './App.css';

function App() {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [popupErrorText, setPopupErrorText] = useState('');

  const openPopup = (errorText) => {
    setPopupErrorText(errorText);
    setIsOpenPopup(true);
  }

  const closePopup = () => {
    setIsOpenPopup(false);
    setPopupErrorText('');
  }

  const onRegistrationUser = async (newUserData) => {
    return MainApi.registration(newUserData)
      .then((res) => console.log(res)) // При успешном логине: авторизация и ресет формы
      .catch(err => openPopup(err.message));
  };

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/movies" element={<Movies onOpenPopup={openPopup} />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register onRegistration={(data) => onRegistrationUser(data)} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <PopupError errorMessage={popupErrorText} isOpen={isOpenPopup} onClose={closePopup} />
    </div>
  );
}

export default App;
