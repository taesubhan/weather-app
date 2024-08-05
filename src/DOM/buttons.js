import {refreshWithDailyForecast, refreshWithHourlyForecast, refreshPage} from './page-control.js';
import {selectFahrenheit, selectCelsius} from './temp-scale.js';
import pageState from '../logic/settings-state.js';

/* Forecast */

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

export function deleteForecastButtons() {
    const btnStorage = document.querySelectorAll('.forecast-buttons');
    if (btnStorage) {
        for (const btn of btnStorage) {
            btn.remove();
        }
    }
}

/* Change Temperature Scale (F or C) */

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

function createTempScaleButtons(weather) {
    const btnContainer = document.createElement('div');
    btnContainer.classList.add('change-temp-scale');
    btnContainer.appendChild(createFahrenheitBtn(weather));
    btnContainer.appendChild(createCelsiusBtn(weather));
    return btnContainer;
}

export function displayChangeTempScaleButtons(weather) {
    const container = document.querySelector('#container');
    container.appendChild(createTempScaleButtons(weather));
}