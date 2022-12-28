import { useState } from 'react';

import './FilterCheckbox.css';

const FilterCheckbox = ({ checkboxValueStorageName, onChangeCheckbox }) => {
 const initialCheckboxValue = JSON.parse(localStorage.getItem(checkboxValueStorageName));
 const [ isChecked, setIsChecked ] = useState(initialCheckboxValue || false);

 const checkboxBarClassNames = `checkbox__bar ${isChecked ? "checkbox__bar_on" : ''}`;
 const checkboxToggleClassNames = `checkbox__toggle ${isChecked ? "checkbox__toggle_on" : "checkbox__toggle_off"}`;

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