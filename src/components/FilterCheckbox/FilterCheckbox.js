import { useState, useEffect } from 'react';

import './FilterCheckbox.css';

const FilterCheckbox = ({ onChangeCheckbox }) => {
  const [ isChecked, setIsChecked ] = useState(false);
  
  const checkboxBarClassNames = `checkbox__bar ${isChecked ? "checkbox__bar_on" : ''}`;
  const checkboxToggleClassNames = `checkbox__toggle ${isChecked ? "checkbox__toggle_on" : "checkbox__toggle_off"}`;

  useEffect(() => {
    const checkboxValue = localStorage.getItem('checkboxValue') === 'true' ? true : false;
    setIsChecked(checkboxValue);
  }, [])

  const handleToggleCheckbox = (evt) => {
    setIsChecked(evt.target.checked);
    onChangeCheckbox(evt.target.checked);
  }

  return (
    <label className="checkbox">
      <div
        className={checkboxBarClassNames}
      >
        <div className={checkboxToggleClassNames}></div>
      </div>
      <input
        className="checkbox__input"
        type="checkbox"
        name="short-movie"
        id="short-movie"
        checked={isChecked}
        onChange={handleToggleCheckbox}        
      />
      Короткометражки
    </label>
  )
}

export default FilterCheckbox