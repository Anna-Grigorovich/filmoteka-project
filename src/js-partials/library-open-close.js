import refs from './refs';
import { movieInfo } from './movie-info';
import { addLocal, getLocalStoradge } from './local';

const modal = document.querySelector('[data-modal]');
refs.library.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.divBackdrop.addEventListener('click', onBackDropClick);

export async function onOpenModal(event) {
  const getParentalEl = event.target.closest('.movie__card');
  if (!getParentalEl) {
    return;
  }

  const movieId = getParentalEl.dataset.movie;
  await movieInfo(movieId);
  const watchedBtn = document.querySelector('#addToWatched');
  watchedBtn.addEventListener('click', handleClickWatched);

  const addToQueueBtn = document.querySelector('#addToQueue');
  addToQueueBtn.addEventListener('click', handleClickQueue);

  document.body.classList.add('show-modal-film');
  window.addEventListener('keydown', onEscKeyPress);
}
export function onCloseModal() {
  document.body.classList.remove('show-modal-film');

  refs.modalRef.innerHTML = '';
  refs.teamRef.innerHTML = '';
}
export function onBackDropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}
export function onEscKeyPress(event) {
  if (event.code !== 'Escape') {
    return;
  }

  window.removeEventListener('keydown', onEscKeyPress);
  onCloseModal();
}

//  для localStorage
function handleClickWatched(e) {
  const arrId = getLocalStoradge('watched');
  const addWatchedRef = document.querySelector('#addToWatched');
  const movieId = e.target.getAttribute('data-btn');
  if (arrId.includes(movieId)) {
    addWatchedRef.textContent = 'Add to watched';
    addWatchedRef.style.backgroundColor = '#B92F2C';
    addWatchedRef.style.color = '#ffffff';
    addLocal('watched', movieId);
  } else {
    addWatchedRef.textContent = 'Is in watched';
    addWatchedRef.style.backgroundColor = '#B92F2C';
    addWatchedRef.style.color = '#ffffff';
    addLocal('watched', movieId);
  }
}

function handleClickQueue(e) {
  const arrId = getLocalStoradge('queue');
  const addQueueRef = document.querySelector('#addToQueue');
  const movieId = e.target.getAttribute('data-btn');

  if (arrId.includes(movieId)) {
    addQueueRef.textContent = 'Add to queue';
    addQueueRef.style.backgroundColor = '#B92F2C';
    addQueueRef.style.color = '#ffffff';
    addLocal('queue', movieId);
  } else {
    addQueueRef.textContent = 'Is in queue';
    addQueueRef.style.backgroundColor = '#B92F2C';
    addQueueRef.style.color = '#ffffff';
    addLocal('queue', movieId);
  }
}
