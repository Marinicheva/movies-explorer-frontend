import { useState, useRef } from 'react';

import './FilterCheckbox.css';

const FilterCheckbox = () => {
  const checkbox = useRef();
  const [ isChecked, setIsChecked ] = useState(false);
  const checkboxBarClassNames = `checkbox__bar ${isChecked ? "checkbox__bar_on" : ''}`;
  const checkboxToggleClassNames = `checkbox__toggle ${isChecked ? "checkbox__toggle_on" : "checkbox__toggle_off"}`;

  const handleToggleCheckbox = () => {
    setIsChecked(state => !state);
  }

  return (
    <label className="checkbox">
      <div
        className={checkboxBarClassNames}
      >
        <div className={checkboxToggleClassNames}></div>
      </div>
      <input
        ref={checkbox}
        className="checkbox__input"
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