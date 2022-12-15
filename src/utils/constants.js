const MOVIES_URL = 'https://api.nomoreparties.co';

const DEFAULT_API_ERROR_TEXT = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';


function getResponseData (res, errorMessage) {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}.${errorMessage}`);
  }
  return res.json();
}


export { MOVIES_URL, DEFAULT_API_ERROR_TEXT, getResponseData };
