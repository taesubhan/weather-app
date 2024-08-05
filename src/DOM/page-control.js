import {populateLocationSearch} from './location-input.js'
import {populateCurrentWeather} from './current-weather-top.js';
import {populateDailyForecastWeather, selectDailyForecast} from './forecast-daily.js';
import {populateHourlyForecastWeather, selectHourlyForecast} from './forecast-hourly.js';
import {populateCurrentWeatherInfo} from './current-weather-info-bottom.js';
import {displayForecastButtons, displayChangeTempScaleButtons} from './buttons.js';
import {setSelectedTempScale} from './temp-scale.js';
import pageState from '../logic/settings-state.js';

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
