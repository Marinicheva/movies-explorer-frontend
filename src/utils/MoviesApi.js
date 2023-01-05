import { MOVIES_URL, getResponseData } from './constants';

class MoviesApi {
  constructor(url, getData) {
    this._url = url;
    this._getData = getData;
  }

  getMovies() {
    return fetch(`${this._url}/beatfilm-movies`)
      .then(res => this._getData(res, 'Произошла ошибка. Список фильмов не получен'))
  }
}

const moviesApi = new MoviesApi(MOVIES_URL, getResponseData);
export default moviesApi;
