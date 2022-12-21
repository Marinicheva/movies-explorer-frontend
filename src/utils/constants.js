const MOVIES_URL = 'https://api.nomoreparties.co';
const MAIN_API_URL = 'http://localhost:3000/';

const POPUP_TYPES = {
  error: 'error',
  info: 'info'
};

const POPUP_MESSAGES = {
  defaultApi: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
  successEditProfile: 'Данные успешно изменены',
}
const EMAIL_REGEX = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
const NAME_REGEX = /^[a-zа-яё\- ]+$/i;

const regFormDefaultValues = {name: '', email: '', password: ''};
const loginFormDefaultValues = {email: '', password: ''};


function getResponseData (res, errorMessage) {
  if (!res.ok) {
    return res.json().then((data) => { throw new Error (data.message) });
    // return Promise.reject({errCode: res.status, errMessage: errorMessage});
  }
  return res.json();
}


export { 
  MOVIES_URL,
  MAIN_API_URL,
  POPUP_TYPES,
  POPUP_MESSAGES,
  EMAIL_REGEX,
  NAME_REGEX,
  regFormDefaultValues,
  loginFormDefaultValues,
  getResponseData,
};
