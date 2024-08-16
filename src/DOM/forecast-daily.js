import {appendChildren} from './reusable-functions.js';

// Create box used to store 3 day forecast
function build3DayForecast(weather) {
    const container = document.querySelector('#container');

    // Level 1
    const forecast = document.createElement('div');
    forecast.classList.add('forecast');
    container.appendChild(forecast);

    // Level 2
    const threeDayForecast = document.createElement('div');
    threeDayForecast.classList.add('daily-forecast');
    forecast.appendChild(threeDayForecast);

    //Level 3 - Holds values for forecast
    const title = document.createElement('div');
    title.classList.add('daily-forecast-title');
    title.textContent = '3 Day Forecast';

    const body = document.createElement('ul');
    body.classList.add('daily-forecast-body');

    appendChildren(threeDayForecast, title, body);
}

// Create a HTML box and populate it with 3 day forecast data
export function populateDailyForecastWeather(weather) {
    build3DayForecast(weather);
    const forecastDays = document.querySelector('.daily-forecast-body');
    const forecast = weather.getForecastDays();
    for (const day of forecast) {
        const item = document.createElement('li');
        item.classList.add('forecast-day');

        const date = document.createElement('div');
        date.classList.add('forecast-date');
        item.appendChild(date);

        const condition = document.createElement('img');
        condition.classList.add('forecast-condition');
        item.appendChild(condition);

        const highLow = document.createElement('div');
        highLow.classList.add('forecast-high-low');
        const high = document.createElement('div');
        high.classList.add('forecast-high');
        const low = document.createElement('div');
        low.classList.add('forecast-low');
        highLow.appendChild(high);
        highLow.appendChild(low);
        item.appendChild(highLow);

        date.textContent = day.date;
        condition.src = day.condition.icon;
        condition.alt = day.condition.text;
        high.textContent = `H: ${day.max}`;
        low.textContent = `L: ${day.min}`;

        forecastDays.appendChild(item);
    }
}

// Add class on "Show Daily Data" button to mark it as currently selected
export function selectDailyForecast() {
    const showHourlyButtons = document.querySelectorAll('.show-hourly-forecast');
    const showDailyButtons = document.querySelectorAll('.show-daily-forecast');
    showHourlyButtons.forEach((btn) => btn.classList.remove('forecast-selected'));
    showDailyButtons.forEach((btn) => btn.classList.add('forecast-selected'));
}