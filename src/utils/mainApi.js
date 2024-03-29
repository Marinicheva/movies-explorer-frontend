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
    return this._request({
      method: 'GET',
      urlPath: 'movies',
    });
  }

  addMovie(movieData) {
    return this._request({
      urlPath: 'movies',
      data: movieData,
    });
  }

  deleteMovie(movieId) {
    return this._request({
      method: 'DELETE',
      urlPath: `movies/${movieId}`
    })
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

  updateUserInfo(changedData) {
    return this._request({
      method: 'PATCH',
      urlPath: 'users/me',
      data: changedData,
    });
  }

  getUserInfo() {
    return this._request({
       method: 'GET',
       urlPath: 'users/me',
     });
  }

  signout() {
    return this._request({
      urlPath: 'signout',
    });
  }
}

const MainApi = new mainApi(MAIN_API_URL, getResponseData);

export default MainApi;