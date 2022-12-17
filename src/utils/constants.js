const MOVIES_URL = 'https://api.nomoreparties.co';
const MAIN_API_URL = 'localhost:3000';

const DEFAULT_API_ERROR_TEXT = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';

const EMAIL_REGEX = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;


function getResponseData (res, errorMessage) {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}.${errorMessage}`);
  }
  return res.json();
}


export { MOVIES_URL, MAIN_API_URL, DEFAULT_API_ERROR_TEXT, EMAIL_REGEX, getResponseData };
