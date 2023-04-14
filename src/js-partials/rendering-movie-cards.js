import { getTrending, getGenres } from './api';
import { createGalleryMarkup } from './create-gallery-markup';
// import { createPagination } from './pagination';
// import { scrollOnTop } from './scroll-on-top';
// import { showHideLoader } from './loader';
import refs from './refs';

const galleryMovie = document.querySelector('.gallery-js');

async function genresTranding() {
  const trandingsMovies = await getTrending();
  const ganres = await getGenres();
  galleryMovie.insertAdjacentHTML(
    'beforeend',
    createGalleryMarkup(trandingsMovies.results, ganres)
  );
}

genresTranding();
