import {getWeather} from '../logic/weather-API.js';
import {appendChildren} from './reusable-functions.js';
import {refreshPage} from './page-control.js';

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

async function pushWeatherObjToDOM(location) {
    const weather = await getWeather(location);
    console.log(weather);
    
    refreshPage(weather);
}

function activateSubmitButton() {
    const submitButton = document.querySelector('.submit-location');

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();

        const searchBar = document.querySelector('#location-search');
        pushWeatherObjToDOM(searchBar.value);
        searchBar.value = null;
    })
}