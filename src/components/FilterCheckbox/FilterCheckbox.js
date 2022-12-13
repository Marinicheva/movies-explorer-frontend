import { useState } from 'react';

import './FilterCheckbox.css';

const FilterCheckbox = ({ onChangeCheckbox }) => {
  const [ isChecked, setIsChecked ] = useState(false);
  
  const checkboxBarClassNames = `checkbox__bar ${isChecked ? "checkbox__bar_on" : ''}`;
  const checkboxToggleClassNames = `checkbox__toggle ${isChecked ? "checkbox__toggle_on" : "checkbox__toggle_off"}`;

  const handleToggleCheckbox = (evt) => {
    setIsChecked(evt.target.checked);
    onChangeCheckbox(evt.target.checked)
  }

  return (
    <label className="checkbox__label">
      <div
        className={checkboxBarClassNames}
      >
        <div className={checkboxToggleClassNames}></div>
      </div>
      <input
        className="checkbox"
        type="checkbox"
        name="short-film"
        id="short-film"
        value={isChecked}
        onChange={handleToggleCheckbox}
      />
      Короткометражки
    </label>
  )
}

export default FilterCheckbox