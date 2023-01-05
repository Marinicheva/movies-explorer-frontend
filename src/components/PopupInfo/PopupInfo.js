import React, {useRef} from 'react';

import './PopupInfo.css';

const PopupInfo = ({ popupText ,isOpen, onClose, popupType }) => {
  const popupLayout = useRef();

  const popupClassNames = `popup ${isOpen ? 'popup_opened' : ''}`;

  const handleClosePopup = () => {
    onClose();
  }

  const handleClosePopupByOverlay = (evt) => {
    if (evt.target === popupLayout.current) {
      onClose();
    }
  }

  return (
    <div
     ref={popupLayout}
     className={popupClassNames}
     onClick={(evt) => handleClosePopupByOverlay(evt)}
    >
      <div className="popup__container">
        {popupType === 'error' && <h2 className="popup__title">Произошла ошибка</h2>}
        <p className="popup__text">{popupText}</p>
        <button className="popup__close" onClick={handleClosePopup}></button>
      </div>
    </div>
  )
}

export default PopupInfo;