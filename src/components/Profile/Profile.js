import { useState } from 'react';

import './Profile.css';

const Profile = () => {
  const [userData, setUserData] = useState({name: 'Виталий', email: 'pochta@yandex.ru'});

  const handleChangeUserData = (evt) => {
    userData[evt.target.id] = evt.target.value;
    setUserData({...userData})
  };


  return (
    <section className='profile'>
      <h1 className="profile__title">Привет, Виталий!</h1>

      <form className="edit-form">
        <label className="edit-form__label">
          Имя
          <input
            type="text"
            name="name"
            id="name"
            value={userData.name}
            className="edit-form__input"
            onChange={(evt) => handleChangeUserData(evt)}
          />
        </label>
        <label className="edit-form__label">
          E-mail
          <input
            type="email"
            name="email"
            id="email"
            value={userData.email}
            className="edit-form__input"
            onChange={(evt) => handleChangeUserData(evt)}
          />
        </label>
        <button className='edit-form__submit'>Редактировать</button>
      </form>
      <a href="f" className="profile__exit">Выйти из аккаунта</a>
    </section>
  )
}

export default Profile;