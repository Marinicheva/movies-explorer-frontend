import { MAIN_API_URL, getResponseData } from './constants';

class mainApi {
  constructor(url, getData) {
    this._url = url;
    this._getData = getData;
  }

  getSavedMovies() {

  }

  addMovie() {

  }

  deleteMovie() {

  }

  register() {

  }

  login() {

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