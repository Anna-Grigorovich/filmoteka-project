// window.onload = function () {
//   const $body = document.body;
//   const $preloader = $body.querySelector('.preloader');
//   function afterTransition() {
//     $body.classList.add('loaded');
//     $body.classList.remove('loaded_hiding');
//     $body.classList.remove('overflow_hidden');
//     $preloader.removeEventListener('transitionend', afterTransition);
//   }
//   $body.classList.add('loaded_hiding');
//   $preloader.addEventListener('transitionend', afterTransition);
// };

export function showHideLoader(element) {
  if (element.style.display === 'block') {
    element.style.display = 'none';
  } else {
    element.style.display = 'block';
  }
}