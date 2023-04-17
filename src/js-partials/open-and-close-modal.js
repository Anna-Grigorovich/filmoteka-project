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
  }

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', backdropCloseModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
})();
