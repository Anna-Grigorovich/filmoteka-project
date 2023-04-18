import Notiflix, { Notify } from 'notiflix';
import { UnsplashAPI } from "./api.js";
import {getGenres } from './api';
import { createGalleryMarkup } from './create-gallery-markup';
import { createPagination } from './pagination';
import { scrollOnTop } from './scrollOnTop.js';
const searchFormEl = document.querySelector('.movie-search');
const galleryListEl = document.querySelector('.gallery__container');
const inputEl = document.querySelector('.movie-search-text');



const unsplashApi = new UnsplashAPI();

const handleSearchFormSubmit = async event => {
    event.preventDefault();

    const query = inputEl.value.trim();
    unsplashApi.q = query;
   
   
    try{
        const { data } = await unsplashApi.fetchMovies();
        
        if(data.total_results === 0) {
            Notify.failure("Sorry, there are no movies matching your search query. Please try again.");
            return;
        }
        Notify.success(`Hooray! We found ${data.total_results} movies.`)
       
        const ganres = await getGenres();
        
        galleryListEl.innerHTML = createGalleryMarkup(data.results, ganres);

        const pagination = createPagination(data.total_results, data.total_pages);
      pagination.on('afterMove', async ({ page }) => {

        unsplashApi.page = page;
        
        galleryListEl.innerHTML = '';
            //   showHideLoader(loader);
        
        const { data } = await unsplashApi.fetchMovies(page);
      
        galleryListEl.innerHTML = createGalleryMarkup(data.results, ganres);
        
        scrollOnTop();
        
      });
         
    } catch (err) {
        console.log(err);
    }

};
searchFormEl.addEventListener('submit', handleSearchFormSubmit);
