import Notiflix, { Notify } from 'notiflix';
import { UnsplashAPI } from "./api.js";
import markupGalleryEL from '../templates/gallery-card.hbs'
import { genres } from './genres';
import { dataFormat } from './data-format.js';


const searchFormEl = document.querySelector('.movie-search');
const galleryListEl = document.querySelector('.gallery__container');
const inputEl = document.querySelector('.movie-search-text');

const unsplashApi = new UnsplashAPI();

const handleSearchFormSubmit = async event => {
    event.preventDefault();

    const searchQuery = inputEl.value.trim();
    unsplashApi.q = searchQuery;

    try{
        const { data } = await unsplashApi.fetchMovies();
       
        if(data.total_results === 0) {
            Notify.failure("Sorry, there are no images matching your search query. Please try again.");
            return;
        }
        Notify.success(`Hooray! We found ${data.total_results} movies.`)
        const formattedData = dataFormat(data.results, genres);
         
        galleryListEl.innerHTML = markupGalleryEL(formattedData);
        
    } catch (err) {
        console.log(err);
    }

};
searchFormEl.addEventListener('submit', handleSearchFormSubmit);
