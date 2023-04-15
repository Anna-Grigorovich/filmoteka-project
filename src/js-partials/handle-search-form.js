import Notiflix, { Notify } from 'notiflix';
import { UnsplashAPI } from "./api.js";
import {getGenres } from './api';
import { createGalleryMarkup } from './create-gallery-markup';

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
            Notify.failure("Sorry, there are no movies matching your search query. Please try again.");
            return;
        }
        Notify.success(`Hooray! We found ${data.total_results} movies.`)
        // const formattedData = dataFormat(data.results, ganres);
        const ganres = await getGenres();
        galleryListEl.innerHTML = createGalleryMarkup(data.results, ganres);
        
    } catch (err) {
        console.log(err);
    }

};
searchFormEl.addEventListener('submit', handleSearchFormSubmit);
