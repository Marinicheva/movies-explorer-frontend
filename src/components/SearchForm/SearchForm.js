import React, { useEffect, useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import "./SearchForm.css";

const SearchForm = ({ onSearchMovies }) => {
  const [searchValue, setSearchValue] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isShowShortMovies, setIsShowShortMovies] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const searchingValue = localStorage.getItem('searchingValue') || '';

    setSearchValue(searchingValue);

    if (searchingValue) {
      setIsValid(true);
    }
  }, []);

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
      localStorage.setItem('searchingValue', searchValue);
      localStorage.setItem('checkboxValue', isShowShortMovies);
    }
  }

  const onChangeCheckbox = (value) => {
    setIsShowShortMovies(value);
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
            required
          />
        </label>
        
        <button
          className="search__submit-btn"
          type="submit"
          disabled={!isValid}
        ></button>
        <FilterCheckbox onChangeCheckbox={onChangeCheckbox} />
        {showError && <span className="search__input-error">Нужно ввести ключевое слово</span> }
      </form>
    </div>
  )
}

export default SearchForm