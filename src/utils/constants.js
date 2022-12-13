const MOVIES_URL = 'https://api.nomoreparties.co';


function getResponseData (res, errorMessage) {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}.${errorMessage}`);
  }
  return res.json();
}


export { MOVIES_URL, getResponseData };
