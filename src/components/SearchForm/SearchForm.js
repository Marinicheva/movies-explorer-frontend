import React, { useEffect, useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import "./SearchForm.css";

const SearchForm = ({ inputValueStorageName, checkboxValueStorageName, onSearchMovies, isInputRequired }) => {
  const initialInputValue = localStorage.getItem(inputValueStorageName) || '';

  const [searchValue, setSearchValue] = useState(initialInputValue);
  const [isValid, setIsValid] = useState(false);
  const [isShowShortMovies, setIsShowShortMovies] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (searchValue || !isInputRequired) {
      setIsValid(true);
    }
  }, [isInputRequired, searchValue]);

  const onChangeSearchInput = (evt) => {
    setSearchValue(evt.target.value);
    setIsValid(evt.target.closest('form').checkValidity());
    setShowError(!evt.target.closest('form').checkValidity())
  }

  const onBlurInput = () => {
    setShowError(false);
  }

  const handleSubmitSearchForm = (evt) => {
    evt.preventDefault();

    if (isValid) {
      onSearchMovies(searchValue, isShowShortMovies);
    }
  }

  const onChangeCheckbox = (value) => {

    setIsShowShortMovies(value);
    onSearchMovies(searchValue, value);
  }

  return (
    <div className="search-container">
      <form className="search" onSubmit={(evt) => handleSubmitSearchForm(evt)} noValidate>
        <label className="search__label-input">
          <input
            className="search__input"
            type="text"
            id="movie"
            placeholder="Фильм"
            value={searchValue}
            onChange={(evt) => onChangeSearchInput(evt)}
            onBlur={onBlurInput}
            required={isInputRequired}
          />
        </label>
        
        <button
          className="search__submit-btn"
          type="submit"
          disabled={!isValid}
        ></button>
        <FilterCheckbox
          checkboxValueStorageName={checkboxValueStorageName}
          onChangeCheckbox={onChangeCheckbox}
        />
        {showError && <span className="search__input-error">Нужно ввести ключевое слово</span> }
      </form>
    </div>
  )
}

export default SearchForm