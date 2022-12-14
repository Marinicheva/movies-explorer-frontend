import React, { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import "./SearchForm.css";

const SearchForm = ({ onSearchMovies }) => {
  const [ searchStr, setSearchStr ] = useState('');
  const [ isShowShortMovies, setIsShowShortMovies ] = useState(false);

  const onChangeSearchInput = (evt) => {
    setSearchStr(evt.target.value);
  }

  const handleSubmitSearchForm = (evt) => {
    evt.preventDefault();
    onSearchMovies(searchStr, isShowShortMovies);
  }

  const onChangeCheckbox = (value) => {
    setIsShowShortMovies(value);
  }

  return (
    <div className="search-container">
      <form className="search" onSubmit={(evt) => handleSubmitSearchForm(evt)}>
        <label className="search__label-input">
          <input
            className="search__input"
            type="text"
            id="movie"
            placeholder="Фильм"
            value={searchStr}
            onChange={(evt) => onChangeSearchInput(evt)}
            required
          />
        </label>
        <button className="search__submit-btn" type="submit"></button>
        <FilterCheckbox />
      </form>
    </div>
  )
}

export default SearchForm