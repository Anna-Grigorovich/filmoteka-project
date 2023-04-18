import { getTrending, getGenres } from './api';
import { createGalleryMarkup } from './create-gallery-markup';
import { createPagination } from './pagination';
// import { scrollOnTop } from './scroll-on-top';
import { showHideLoader } from './loader';
import refs from './refs';

const loader = document.querySelector('.loader');
const galleryMovie = document.querySelector('.gallery-js');

async function genresTranding() {
  showHideLoader(loader);
  const trandingsMovies = await getTrending();
  const ganres = await getGenres();
  const page = trandingsMovies.page;
  console.log(page);
  galleryMovie.insertAdjacentHTML(
    'beforeend',
    createGalleryMarkup(trandingsMovies.results, ganres)
    
  );
  showHideLoader(loader);
  const pagination = createPagination(
    trandingsMovies.total_results,
    trandingsMovies.total_pages
  );
  pagination.on('beforeMove', ({ page }) => {
    refs.gallery.innerHTML = '';
    showHideLoader(loader);
    getTrending(page).then(data => {
      // 
      refs.gallery.innerHTML = createGalleryMarkup(data.results, ganres);
    showHideLoader(loader);
    });
  });
}
genresTranding();
