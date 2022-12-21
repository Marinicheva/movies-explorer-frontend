import React from 'react';

import './PopupInfo.css';

const PopupInfo = ({ popupText ,isOpen, onClose, popupType }) => {

  const popupClassNames = `popup ${isOpen ? 'popup_opened' : ''}`;

  const handleClosePopup = () => {
    onClose();
  }

  // TODO: Close by click in overlay
  return (
    <div className={popupClassNames}>
      <div className="popup__container">
        {popupType === 'error' && <h2 className="popup__title">Произошла ошибка</h2>}
        <p className="popup__text">{popupText}</p>
        <button className="popup__close" onClick={handleClosePopup}></button>
      </div>
    </div>
  )
}

export default PopupInfo;