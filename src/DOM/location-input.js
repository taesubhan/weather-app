import {getWeather} from '../logic/weather-API.js';
import {appendChildren} from './reusable-functions.js';
import {refreshPage, addLoaderGIF, removeLoaderGIF} from './page-control.js';

// Create a search box for users to input a location
export function populateLocationSearch() {
    const container = document.querySelector('#container');
    
    // Level 1
    const header = document.createElement('div');
    header.classList.add('header');
    container.appendChild(header);

    // Level 2
    const userInput = document.createElement('div');
    userInput.classList.add('user-input');
    header.appendChild(userInput);

    // Level 3
    const form = document.createElement('form');
    form.setAttribute('action', '');
    userInput.appendChild(form);

    // Level 4
    const label = document.createElement('label');
    label.setAttribute('for', 'location-search');
    label.classList.add('location-label');
    label.textContent = 'Input city or zip code: ';

    const input = document.createElement('input');
    input.setAttribute('type', 'search');
    input.setAttribute('id', 'location-search');

    const button = document.createElement('button');
    button.classList.add('submit-location');
    button.textContent = 'Submit';

    appendChildren(form, label, input, button);

    activateSubmitButton();
}

// Accepts an error message and displays the error
function addErrorMessage(error) {
    const header = document.querySelector('.header');
    let errorMessage = document.createElement('div');
    const existingError = document.querySelector('.error-message');
    if (existingError) {
        errorMessage = existingError;
        errorMessage.textContent = error;
        return;
    }
    errorMessage.classList.add('error-message');
    errorMessage.textContent = error;
    header.appendChild(errorMessage);
}

// Retrieves the weather information given a location string. Retrieves data through the weather API
async function pushWeatherObjToDOM(location) {
    let weather;
    try {
        addLoaderGIF();
        weather = await getWeather(location);
    } catch(err) {
        removeLoaderGIF();
        addErrorMessage(err);
        return;
    }
    
    // For testing purposes
    console.log(weather);
    
    refreshPage(weather);
}

// Adds event listener to the submit button. Sends the text within the search box to retrieve the location's weather data
function activateSubmitButton() {
    const submitButton = document.querySelector('.submit-location');

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();

        const searchBar = document.querySelector('#location-search');
        pushWeatherObjToDOM(searchBar.value);
        searchBar.value = null;
    })
}