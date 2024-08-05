import {appendChildren} from './reusable-functions.js';

function buildCurrentWeatherBox() {
    const container = document.querySelector('#container');

    // Level 1 (Top) - Current weather container
    const currentWeather = document.createElement('div');
    currentWeather.classList.add('current-weather');
    container.appendChild(currentWeather);
    
    // Level 2 - Container for current location and time
    const currentLocation = document.createElement('div');
    currentLocation.classList.add('current-location');
    currentWeather.appendChild(currentLocation);

    // Level 3 - Spans that stores the above information
    const regionState = document.createElement('span');
    regionState.classList.add('region-state');
    const localTime = document.createElement('localtime');
    localTime.classList.add('localtime');
    appendChildren(currentLocation, regionState, localTime);

    // Level 2 - Container for current temperature
    const currentBody = document.createElement('div');
    currentBody.classList.add('current-body');
    currentWeather.appendChild(currentBody);

    // Level 3 - Sub-container for just the weather information
    const currentWeatherInfo = document.createElement('div');
    currentWeatherInfo.classList.add('current-weather-information');
    currentBody.appendChild(currentWeatherInfo);

    // Level 4 - Temperature information
    const currentTemp = document.createElement('div');
    currentTemp.classList.add('current-temperature');
    const currentCond = document.createElement('div');
    currentCond.classList.add('current-condition');
    const currentMaxMin = document.createElement('div');
    currentMaxMin.classList.add('current-max-min');
    appendChildren(currentWeatherInfo, currentTemp, currentCond, currentMaxMin);

    // Level 5 - Max Min
    const max = document.createElement('div');
    max.classList.add('current-max-temp');
    const min = document.createElement('div');
    min.classList.add('current-min-temp');
    appendChildren(currentMaxMin, max, min);

    // Level 3 - Container for current weather icon
    const currentConditionIcon = document.createElement('div');
    currentConditionIcon.classList.add('current-condition-icon-container');
    currentBody.appendChild(currentConditionIcon);
}

export function deleteCurrentWeatherBox() {
    const currentWeather = document.querySelector('.current-weather');
    if (currentWeather) {
        currentWeather.remove();
    }
}

export function populateCurrentWeather(weather) {
    buildCurrentWeatherBox();
    const currentRegionState = document.querySelector('.region-state');
    const currentLocalTime = document.querySelector('.localtime');
    const currentTemp = document.querySelector('.current-temperature');
    const currentCondition = document.querySelector('.current-condition');
    const conditionIconContainer = document.querySelector('.current-condition-icon-container')
    const maxTemp = document.querySelector('.current-max-temp');
    const minTemp = document.querySelector('.current-min-temp');
    
    let conditionIcon = document.querySelector('.condition-icon')
    if (!conditionIcon) {
        conditionIcon = document.createElement('img');
        conditionIcon.classList.add('condition-icon');
        conditionIconContainer.appendChild(conditionIcon);
    }
    
    const location = weather.getLocation();
    const condition = weather.getCurrentCondition();
    const range = weather.getMaxMinTempToday();

    currentRegionState.textContent = `${location.region}, ${location.city}`;
    currentRegionState.innerText += '\u00A0';
    currentLocalTime.textContent = `as of ${location.localTime}`;
    currentTemp.textContent = weather.getCurrentTemperature().fahrenheit;
    currentCondition.textContent = condition.text;
    conditionIcon.src = condition.icon;
    conditionIcon.alt = `${condition.text} icon`;
    maxTemp.textContent = `H: ${range.max}`;
    minTemp.textContent = `L: ${range.min}`;
}