import React, { useContext, useEffect} from 'react';
import Header from '../Header/Header';
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

import {useFormWithValidation} from "../../hooks/useFormWithValidation";

import './Profile.css';
const Profile = ({ onEditUserData, onSignout }) => {
  const currentUser = useContext(CurrentUserContext);

  const editUserDataForm = useFormWithValidation({name: '', email: ''});

  useEffect(() => {
    if (currentUser.name && currentUser.email) {
      editUserDataForm.setValues(currentUser);
    }
  }, [currentUser]);

  const handleChangeInputs = (evt) => {
    editUserDataForm.handleChange(evt);

    const isSameValue = evt.target.value === currentUser[evt.target.name];

    if ( isSameValue ) {
      editUserDataForm.setIsValid(false);
    }
  }

  const handleSubmitChangeUserData = (evt) => {
    evt.preventDefault();
    onEditUserData(editUserDataForm.values);
  }

  return (
    <>
      <Header isLoggedIn={true} />
      <section className="profile">
        <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>

        <form
          className="edit-form"
          onSubmit={(evt) => handleSubmitChangeUserData(evt)}
        >
          <label className="edit-form__label">
            Имя
            <input
              type="text"
              name="name"
              id="name"
              value={editUserDataForm.values.name}
              className={`edit-form__input ${editUserDataForm.errors.name && 'edit-form__input_with_error'}`}
              minLength={2}
              maxLength={30}
              required={true}
              onChange={(evt) => handleChangeInputs(evt)}
            />
          </label>
          <span className="edit-form__error-text">{editUserDataForm.errors.name}</span>
          <div className="edit-form__line"></div>
          <label className="edit-form__label">
            E-mail
            <input
              type="email"
              name="email"
              id="email"
              value={editUserDataForm.values.email}
              className={`edit-form__input ${editUserDataForm.errors.email && 'edit-form__input_with_error'}`}
              required={true}
              onChange={(evt) => handleChangeInputs(evt)}
            />
          </label>
          <span className="edit-form__error-text">{editUserDataForm.errors.email}</span>
          <button
            className="edit-form__submit"
            disabled={!editUserDataForm.isValid}
          >
            Редактировать
          </button>
        </form>
        <button
          className="profile__exit"
          onClick={onSignout}
        >
          Выйти из аккаунта
        </button>
      </section>

    </>
  )
}

export default Profile;