import React, { useCallback } from "react";
import { EMAIL_REGEX, NAME_REGEX } from '../utils/constants';

export function useFormWithValidation(initialValues) {
  const [values, setValues] = React.useState(initialValues);
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (evt, errorText) => {
    const target = evt.target;
    const name = target.name;
    const value = target.value;

    setValues({...values, [name]: value});

    if (value.length === 0) {
      setErrors(state => ({...state, [name]: 'Данное поле обязательно для заполнения'}))
    } else if (name === 'name' && !NAME_REGEX.test(value)) {
      setErrors(state => ({...state, [name]: 'Имя может содержать только латиницу, кириллицу, пробел и дефис'}))
    } else if (name === 'name' && (value.length < 2 || value.length > 30)) {
      setErrors(state => ({...state, [name]: 'Имя должно быть длиной не менее 2 символов и не более 30'}))
    } else if (name === 'email' && !EMAIL_REGEX.test(value)) {
      setErrors(state => ({...state, [name]: 'Некорректный формат e-mail'}))
    } else {
      setErrors({...errors, [name]: target.validationMessage });
    }

    setIsValid(target.closest("form").checkValidity() && !errors[name]);
  };

  const resetForm = useCallback(
    (newValues, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, setValues, setErrors, setIsValid, handleChange, errors, isValid, resetForm };
}