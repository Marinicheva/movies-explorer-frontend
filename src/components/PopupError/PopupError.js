import React from 'react';

import './PopupError.css';

const PopupError = ({ errorMessage ,isOpen, onClose }) => {

  const popupClassNames = `popup ${isOpen ? 'popup_opened' : ''}`;

  const handleClosePopup = () => {
    onClose();
  }

  // TODO: Close by click in overlay
  return (
    <div className={popupClassNames}>
      <div className="popup__container">
        <h2 className="popup__title">Произошла ошибка</h2>
        <p className="popup__text">{errorMessage}</p>
        <button className="popup__close" onClick={handleClosePopup}></button>
      </div>
    </div>
  )
}

export default PopupError;