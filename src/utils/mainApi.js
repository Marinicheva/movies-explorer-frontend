import { MAIN_API_URL, getResponseData } from './constants';

class mainApi {
  constructor(url, getData) {
    this._url = url;
    this._getData = getData;
  }

  _request ({ urlPath, method = "POST", data, errorMessage = 'Some error' }) {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
  
    const config = {
      method,
      headers,
      credentials: 'include',
    };
  
    if (data) {
      config.body = JSON.stringify(data);
    }
  
    return fetch(`${this._url}${urlPath}`, config)
      .then((res) => {
        return this._getData(res, errorMessage)
      });
  };

  getSavedMovies() {

  }

  addMovie() {

  }

  deleteMovie() {

  }

  registration(newUserData) {
    return this._request({
      urlPath: 'signup',
      data: newUserData,
      errorMessage: 'Ошибка регистрации'
    });
  }

  authorization(userData) {
    return this._request({
      urlPath: 'signin',
      data: userData,
    });
  }

  updateUserInfo() {

  }

  getUserInfo() {

  }

  signout() {
    return this._request({
      urlPath: 'signout',
    });
  }
}

const MainApi = new mainApi(MAIN_API_URL, getResponseData);

export default MainApi;