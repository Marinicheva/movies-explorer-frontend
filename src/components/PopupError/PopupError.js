import React from 'react';

import './PopupError.css';

const PopupError = ({ isOpen }) => {

  return (
    <div className="popup">
      <div className="popup__container">
        <h2 className="popup__title">Произошла ошибка</h2>
        <p className="popup__text">Таким образом, новая модель организационной деятельности прекрасно подходит для реализации первоочередных требований.</p>
        <button className="popup__close"></button>
      </div>
    </div>
  )
}

export default PopupError;