import { MOVIES_URL, getResponseData } from './constants';

class MoviesApi {
  constructor(url, getData) {
    this._url = url;
    this._getData = getData;
  }

  getMovies() {
    return fetch(`${this._url}/beatfilm-movies`)
    // TODO: Let's think about error text message 
      .then(res => this._getData(res, 'Данные с фильмами не получены'))
  }
}

const moviesApi = new MoviesApi(MOVIES_URL, getResponseData);
export default moviesApi;
