import { getArrayofMovies } from './api';
import { getLocalStoradge } from './local';
const libraryBtn = document.querySelector('.watched');
const galleryLib = document.querySelector('#gallery-lib');
const queueBtn = document.querySelector('.queue');

libraryBtn.addEventListener('click', handleLibraryClick);
queueBtn.addEventListener('click', handleQueueClick);

async function handleLibraryClick(e) {
  e.preventDefault();
  galleryLib.innerHTML = '';

  const idArr = getLocalStoradge('watched');
  const movieData = await getArrayofMovies(idArr);
  const markup = createLibraryMarkup(movieData);

  galleryLib.insertAdjacentHTML('beforeend', markup);
}

async function handleQueueClick(e) {
  e.preventDefault();
  galleryLib.innerHTML = '';
  const idArr = getLocalStoradge('queue');
  const movieData = await getArrayofMovies(idArr);
  const markup = createLibraryMarkup(movieData);

  galleryLib.insertAdjacentHTML('beforeend', markup);
}

export function createLibraryMarkup(movie) {
  return movie
    .map(movie => {
      const genres = movie.genres;
      const genresName = [];
      genres.map(genre => genresName.push(genre.name));
      const genresStr = genresName.join(' ');
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
          <p class="movie__descr"> ${genresStr}  | ${(
        movie.release_date ?? movie.first_air_date
      ).slice(0, 4)}</p>
        </div>
      </li>`;
    })
    .join('');
}
