// import { genresGalleryFormat } from './genres-format';
// import noposter from '../images/noposter.jpg';
import { data } from 'jquery';
import { getTrending, getGenres } from './api';

let genresArr;

function getGenresList(arr) {
  let results = [];
  arr.forEach(element => {
    const g = genresArr.find(genre => genre.id === element);
    if (g) {
      results.push(g.name);
    }
  });
  if (results.length > 3) {
    results.length = 3;
    results[2] = 'Other';
  }
  return results;
}

export function createGalleryMarkup(movies, ganres) {
  genresArr = ganres.genres;
  return movies
    .map(movie => {
      // const genres = genresGalleryFormat(movie.genre_ids);
      const genres = movie.genre_ids;

      const movieDate = movie.release_date ?? movie.first_air_date ?? null;
      const movieYear = movieDate ? movieDate.slice(0, 4) : 'Unknown year';

      // const poster = movie.poster_path
      //   ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
      //   : noposter;

      const poster = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
      return `
      <li class="movie__card" data-movie="${movie.id}">
        <div class="movie__thumb">        
            <img class="movie__image"
            src="${poster}"
            alt=${movie.title ?? movie.name}
            loading="lazy"
            />      
        </div>
        <div class="movie__info">
          <p class="movie__name">${movie.title ?? movie.name}</p>
          <p class="movie__descr">${getGenresList(genres)} | ${movieYear}</p>
        </div>
      </li>`;
    })
    .join('');
}
