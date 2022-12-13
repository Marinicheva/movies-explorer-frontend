import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import "./SearchForm.css";

const SearchForm = () => {
  return (
    <div className="search-container">
      <form className="search">
        <label className="search__label-input">
          <input
            className="search__input"
            type="text"
            id="movie"
            placeholder="Фильм"
            required
          />
        </label>
        <button className="search__submit-btn" type="submit">&#8250;</button>
        <FilterCheckbox />
      </form>
    </div>
  )
}

export default SearchForm