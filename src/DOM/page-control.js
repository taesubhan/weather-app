import {populateLocationSearch} from './location-input.js'
import {populateCurrentWeather} from './current-weather-top.js';
import {populateDailyForecastWeather, selectDailyForecast} from './forecast-daily.js';
import {populateHourlyForecastWeather, selectHourlyForecast} from './forecast-hourly.js';
import {populateCurrentWeatherInfo} from './current-weather-info-bottom.js';
import {displayForecastButtons, displayChangeTempScaleButtons} from './buttons.js';
import {setSelectedTempScale} from './temp-scale.js';
import pageState from '../logic/settings-state.js';
import loaderGifAsset from '../assets/gif/webpage-loader.gif';

export function clearPage() {
    const container = document.querySelector('#container');
    while (container.lastChild) {
        container.lastChild.remove();
    }
}

function populateSearchAndCurrent(weather) {
    populateLocationSearch();
    displayChangeTempScaleButtons(weather);
    setSelectedTempScale(weather);
    populateCurrentWeather(weather);
    displayForecastButtons(weather);
}

export function refreshWithDailyForecast(weather) {
    clearPage();

    populateSearchAndCurrent(weather);
    
    populateDailyForecastWeather(weather);
    populateCurrentWeatherInfo(weather);
    selectDailyForecast();
}

export function refreshWithHourlyForecast(weather) {
    clearPage();
    
    populateSearchAndCurrent(weather);

    populateHourlyForecastWeather(weather);
    displayForecastButtons(weather);
    selectHourlyForecast();
}

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

export function removeLoaderGIF() {
    const loader = document.querySelector('.loader-container');
    if (loader) {
        loader.remove();
    }
}