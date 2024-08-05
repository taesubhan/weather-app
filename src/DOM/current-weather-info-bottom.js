import {appendChildren} from './reusable-functions.js';

export function deleteCurrentWeatherInfo() {
    const info = document.querySelector('.current-weather-info');
    if (info) {
        info.remove();
    }
}

function buildCurrentWeatherInfo() {
    const container = document.querySelector('#container');
    
    // Level 1
    const weatherInfo = document.createElement('div');
    weatherInfo.classList.add('current-weather-info');
    container.appendChild(weatherInfo);

    // Level 2
    const title = document.createElement('div');
    title.classList.add('current-weather-info-title');
    title.textContent = 'Current Weather';
    
    const dataContainer = document.createElement('ul');
    dataContainer.classList.add('current-weather-data');

    appendChildren(weatherInfo, title, dataContainer);
}

function getCurrentWeatherInfoTitle(key) {
    switch(key) {
        case 'feelslike_f':
            return 'Feels Like';
        case 'humidity':
            return 'Humidity';
        case 'uv':
            return 'UV Index';
        case 'visibility':
            return 'Visibility';
        case 'wind_mph':
            return 'Wind';
        case 'pressure_in':
            return 'Pressure';
    }
}

export function populateCurrentWeatherInfo(weather) {
    buildCurrentWeatherInfo();
    const weatherContainer = document.querySelector('.current-weather-data');
    const weatherInfo = weather.getCurrentWeatherInfo();

    for (const [key, val] of Object.entries(weatherInfo)) {
        const item = document.createElement('li');
        item.classList.add(key, 'current-weather-info-item');
        const title = document.createElement('div');
        title.classList.add('current-weather-info-key');
        const value = document.createElement('div');
        value.classList.add('current-weather-info-value');

        title.textContent = getCurrentWeatherInfoTitle(key);
        value.textContent = val;

        appendChildren(item, title, value);
        weatherContainer.appendChild(item);
    }
}