import axios from 'axios';

const MAIN_URL = 'https://api.themoviedb.org/3';
const API_KEY = '30b92e886ebe536d021caf51a30c3282';

export async function getTrending(page = 1) {
  const url = `${MAIN_URL}/trending/all/day?api_key=${API_KEY}&language=en-US&page=${page}`;
  return await axios
    .get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => console.log(error));
}

//функция поиск по имени
export async function getNameFilm(query) {
  const url = `${MAIN_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&`;
  return await axios
    .get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => console.log(error));
}

//функция поиск по имени 2
export class UnsplashAPI {
  #BASE_URL = 'https://api.themoviedb.org/3/search/movie';
  #API_KEY = '4b6315d08086197e79e9ab9df9a28b6a';

  page = 1;
  q = null;

  async fetchMovies() {
      try {
          return await axios.get(`${this.#BASE_URL}`, {
              params: {
                  query: this.q,
                  api_key: this.#API_KEY,

              },
          });
      } catch (err) {
          throw new Error(err.message);
      }
  }

}
