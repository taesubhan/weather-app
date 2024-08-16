import {refreshPage} from './page-control.js';
import {selectFahrenheit, selectCelsius} from './temp-scale.js';
import pageState from '../logic/settings-state.js';
import {setSelectedTempScale} from './temp-scale.js';

/**** Forecast ****/

// Creates HTML button that displays daily forecast
function createShowDailyButton(weather) {
    const showDailyBtn = document.createElement('button');
    showDailyBtn.classList.add('show-daily-forecast', 'forecast-btn');
    showDailyBtn.textContent = 'Show Daily Data';
    showDailyBtn.addEventListener('click', () => {
        pageState.setForecastToDaily();
        refreshPage(weather);   
    })
    return showDailyBtn;
}

// Creates HTML button that displays hourly forecast
function createShowHourlyButton(weather) {
    const showHourlyBtn = document.createElement('button');
    showHourlyBtn.classList.add('show-hourly-forecast', 'forecast-btn');
    showHourlyBtn.textContent = 'Show Hourly Data';
    showHourlyBtn.addEventListener('click', () => {
        pageState.setForecastToHourly();
        refreshPage(weather);      
    })
    return showHourlyBtn;
}

// Displays the 2 forecast buttons on webpage
export function displayForecastButtons(weather) {
    const container = document.querySelector('#container');
    const btnStorage = document.createElement('div');
    btnStorage.classList.add('forecast-buttons');
    
    const dailyBtn = createShowDailyButton(weather);
    const hourlyBtn = createShowHourlyButton(weather);

    btnStorage.appendChild(dailyBtn);
    btnStorage.appendChild(hourlyBtn);
    
    container.appendChild(btnStorage);
}

/**** Change Temperature Scale (F or C) ****/

// Create HTML button to change all temperature values to Fahrenheit
function createFahrenheitBtn(weather) {
    const btn = document.createElement('button');
    btn.classList.add('set-to-fahrenheit', 'temp-scale-button');
    btn.textContent = 'Fahrenheit';
    btn.addEventListener('click', () => {
        weather.setToFahrenheit();
        refreshPage(weather);
        selectFahrenheit();
    })
    return btn;
}

// Create HTML button to change all temperature values to Celsius
function createCelsiusBtn(weather) {
    const btn = document.createElement('button');
    btn.classList.add('set-to-celsius', 'temp-scale-button');
    btn.textContent = 'Celsius';
    btn.addEventListener('click', () => {
        weather.setToCelsius();
        refreshPage(weather);
        selectCelsius();
    })
    return btn;
}

// Create container that holds both the Fahrenheit and Celsius button
function createTempScaleButtons(weather) {
    const btnContainer = document.createElement('div');
    btnContainer.classList.add('change-temp-scale');
    const fahBtn = createFahrenheitBtn(weather);
    const celBtn = createCelsiusBtn(weather);
    btnContainer.appendChild(fahBtn);
    btnContainer.appendChild(celBtn);
    setSelectedTempScale(weather, fahBtn, celBtn);
    return btnContainer;
}

// Displays the Fahrenheit and Celsius button
export function displayChangeTempScaleButtons(weather) {
    const container = document.querySelector('.current-body');
    container.appendChild(createTempScaleButtons(weather));
}