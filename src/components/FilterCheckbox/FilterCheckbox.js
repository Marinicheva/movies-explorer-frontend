import { useState, useRef } from 'react';

import './FilterCheckbox.css';

const FilterCheckbox = () => {
  const checkbox = useRef();
  const [ isChecked, setIsChecked ] = useState(false);

  const handleToggleCheckbox = () => {
    setIsChecked(state => !state);
  }

  const checkboxBarClassNames = `search__checkbox-bar ${isChecked ? 'search__checkbox-bar_on' : ''}`;
  const checkboxToggleClassNames = `search__checkbox-toggle ${isChecked ? 'search__checkbox-toggle_on' : 'search__checkbox-toggle_off'}`;

  return (
    <label className='search__checkbox-label'>
      <div className={checkboxBarClassNames}>
        <div className={checkboxToggleClassNames} onClick={handleToggleCheckbox}></div>
      </div>
      <input
        ref={checkbox}
        className='search__checkbox'
        type="checkbox"
        name="short-film"
        id="short-film"
        checked={isChecked}
      />
      Короткометражки
    </label>
  )
}

export default FilterCheckbox