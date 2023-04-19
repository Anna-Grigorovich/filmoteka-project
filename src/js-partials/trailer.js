import * as basicLightbox from 'basiclightbox'
import { getVideos } from './api'

let idTrailer = '';

export async function onTrailerBtnClick(id) {
  getVideos(id).then(e => {
    idTrailer = e.results[0].key;

    console.log(idTrailer);

    const instance = basicLightbox.create(`<iframe class="trailerPlayer" 
    src="https://www.youtube.com/embed/${idTrailer}" width="1200" height="800" frameborder="0"></iframe>`);

    instance.show();
  })
  .catch(error => {
  });
}
