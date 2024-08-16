import {populateLocationSearch} from './location-input.js'
import {populateCurrentWeather} from './current-weather-top.js';
import {populateDailyForecastWeather, selectDailyForecast} from './forecast-daily.js';
import {populateHourlyForecastWeather, selectHourlyForecast} from './forecast-hourly.js';
import {populateCurrentWeatherInfo} from './current-weather-info-bottom.js';
import {displayForecastButtons, displayChangeTempScaleButtons} from './buttons.js';
import pageState from '../logic/settings-state.js';
import loaderGifAsset from '../assets/gif/loading-animation.gif';
import defaultBackground from '../assets/images/background-1.jpg';
import dayBackground from '../assets/images/day-1.jpg';
import nightBackground from '../assets/images/night-1.jpg'

// Clears all the DOM of the webpage
export function clearPage() {
    const container = document.querySelector('#container');
    while (container.lastChild) {
        container.lastChild.remove();
    }
}

// Sets the background of the webpage depending on the weather object's day cycle (day vs. night vs. default)
export function setBackground(weather = null) {
    if (!weather) {
        document.body.style.backgroundImage = `url(${defaultBackground})`;
        return;
    } else if (weather.isDay()) {
        document.body.style.backgroundImage = `url(${dayBackground})`;
    } else {
        document.body.style.backgroundImage = `url(${nightBackground})`;
    }
}

// Creates the search bar and the current weather box
function populateSearchAndCurrent(weather) {
    setBackground(weather);
    populateLocationSearch();
    
    populateCurrentWeather(weather);
    displayChangeTempScaleButtons(weather);
    displayForecastButtons(weather);
}

// Creates a footer at the end of the webpage. Used to add extra space at the bottom for now
function addFooter() {
    const container = document.querySelector('#container');
    const footer = document.createElement('div');
    footer.classList.add('footer');
    container.appendChild(footer);
}

// Clears webpage and re-populates with Daily forecast data
export function refreshWithDailyForecast(weather) {
    clearPage();

    populateSearchAndCurrent(weather);
    
    populateDailyForecastWeather(weather);
    populateCurrentWeatherInfo(weather);
    selectDailyForecast();
    
    addFooter();
}

// Clears webpage and re-populates with Hourly forecast data
export function refreshWithHourlyForecast(weather) {
    clearPage();
    
    populateSearchAndCurrent(weather);

    populateHourlyForecastWeather(weather);
    displayForecastButtons(weather);
    selectHourlyForecast();

    addFooter();
}

// Clears and repopulates the webpage depending on whether the user selected hourly or daily forecast
export function refreshPage(weather) {
    // const selectedForecast = document.querySelector('.forecast-selected');
    const selectedForecast = pageState.getForecast();
    if (selectedForecast === 'daily') {
        refreshWithDailyForecast(weather);
    } else if (selectedForecast === 'hourly') {
        refreshWithHourlyForecast(weather);
    } else {
        throw new Error('No forecast type found at refresh');
    }
}

// Displays a buffering gif while awaiting the API to return the weather data
export function addLoaderGIF() {
    // const container = document.querySelector('#container');
    const header = document.querySelector('.header');
    const loader = document.createElement('div');
    loader.classList.add('loader-container');
    header.after(loader);

    const loaderGif = document.createElement('img');
    loaderGif.classList.add('loader-gif');
    loaderGif.src = loaderGifAsset;
    loaderGif.alt = 'webpage loader';
    loader.appendChild(loaderGif);
}

// Removes the buffering gif
export function removeLoaderGIF() {
    const loader = document.querySelector('.loader-container');
    if (loader) {
        loader.remove();
    }
}