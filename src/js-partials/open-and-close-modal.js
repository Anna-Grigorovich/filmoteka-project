import refs from './refs';
import { movieInfo } from './movie-info';

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-team-open]'),
    closeModalBtn: document.querySelector('[data-modal-team-close]'),
    modal: document.querySelector('[data-modal-team]'),
    body: document.querySelector('body'),
  };

  const toggleModal = event => {
    event.preventDefault();

    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  };

  const backdropCloseModal = event => {
    if (event.target === refs.modal) {
      refs.modal.classList.add('is-hidden');
      refs.body.classList.remove('no-scroll');
    }
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', backdropCloseModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
})();
const modal = document.querySelector('[data-modal]');

refs.gallery.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.divBackdrop.addEventListener('click', onBackDropClick);

function onOpenModal(event) {
  const getParentalEl = event.target.closest('.movie__card');
  if (!getParentalEl) {
    return;
  }

  const movieId = getParentalEl.dataset.movie;
  movieInfo(movieId);
  console.log(movieId);

  document.body.classList.add('show-modal');
  window.addEventListener('keydown', onEscKeyPress);
}
function onCloseModal() {
  document.body.classList.remove('show-modal');

  refs.modalRef.innerHTML = '';
  refs.teamRef.innerHTML = '';
}
function onBackDropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}
function onEscKeyPress(event) {
  if (event.code !== 'Escape') {
    return;
  }

  window.removeEventListener('keydown', onEscKeyPress);
  onCloseModal();
}
