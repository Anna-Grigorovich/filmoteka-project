import { getInfoMovie, getVideos } from './api';
import { getGenresList } from './create-gallery-markup';

const modalEl = document.querySelector('.modal__wrap');

export async function movieInfo(id) {
  const movie = await getInfoMovie(id);
  const markup = createMovieInfo(movie);
  modalEl.innerHTML = markup;
}

function createMovieInfo(movie) {
  const genres = movie.genres;
  const genresName = [];
  genres.map(genre => genresName.push(genre.name));
  const genresStr = genresName.join(' ');
  console.log(genresStr);
  const poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return `<img
      class="modal__img"
      src="${poster}"
      alt=""
      width="240"
      height="357"
    />
    <div>
      <h2 class="modal__title">${movie.title}</h2>
      <div class="modal__list-box">
        <ul class="modal__list list">
          <li class="modal__list-item">
            <p class="modal__list-rigth">Vote/Votes </p>
          </li>
          <li class="modal__list-item">
            <p class="modal__list-rigth">Popularity</p>
          </li>
          <li class="modal__list-item">
            <p class="modal__list-rigth">Original Title</p>
          </li>
          <li class="modal__list-item">
            <p class="modal__list-rigth">Genre</p>
          </li>
        </ul>
        <ul class="modal__list list">
          <li class="modal__list-item modal__left">
            <p class="modal__list-left">
    <span class="modal__list-vote">${movie.vote_average.toFixed(1)}</span>
                <span class="modal__list-slesh">/</span>
                <span class="modal__list-votes">${movie.vote_count}</span>
    </p>
          </li>
          <li class="modal__list-item modal__left">
            <p class="modal__list-left">${
              movie.popularity.toFixed(1) ?? '-'
            } </p>
          </li>
          <li class="modal__list-item modal__left">
            <p class="modal__list-left">${movie.title}</p>
          </li>
          <li class="modal__list-item modal__left">
            <p class="modal__list-left">${genresStr}</p>
          </li>
        </ul>
      </div>
      <h3 class="modal__subtitle">ABOUT</h3>
      <p class="modal__descrpt">
       ${movie.overview ?? '---'}
      </p>
       
      <ul class="modal__btn-list list">
        <li>
          <button type="button" class="modal__btn" data-btn="addToWatched">
            add to Watched
          </button>
        </li>
        <li>
          <button type="button" class="modal__btn" data-btn="addToQueue">
            add to queue
          </button>
        </li>
        <li>
          <button type="button" class="modal__btn" id = 'trailer_button'">
            Trailer
          </button>
        </li>
      </ul>
    </div>`;
}
