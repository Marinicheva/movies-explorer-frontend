import { MAIN_API_URL, getResponseData } from './constants';

class mainApi {
  constructor(url, getData) {
    this._url = url;
    this._getData = getData;
  }

  _request ({ urlPath, method = "POST", data, token, errorMessage = 'Some error' }) {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
  
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
  
    const config = {
      method,
      headers,
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

  authorization() {

  }

  updateUserInfo() {

  }

  getUserInfo() {

  }

  signout() {
    
  }
}

const MainApi = new mainApi(MAIN_API_URL, getResponseData);

export default MainApi;