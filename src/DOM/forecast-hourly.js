import {appendChildren} from './reusable-functions.js';

// Create box used to store hourly forecast
function buildHourlyForecast(weather) {
    const container = document.querySelector('#container');

    // Level 1
    const hourlyForecast = document.createElement('div');
    hourlyForecast.classList.add('hourly-forecast');
    container.appendChild(hourlyForecast);

    // Level 2
    const title = document.createElement('div');
    title.classList.add('hourly-forecast-title');
    title.textContent = '3 Day Hourly Forecast';
    
    const records = document.createElement('div');
    records.classList.add('hourly-forecast-container');

    appendChildren(hourlyForecast, title, records);
}

// Takes in a day object (from the weather object) and creates a div for each hour data
function populateHourlyRecords(day, dayElem) {
    const hours = day.hours;
    for (let i = 0; i < hours.length; i++) {
        const hour = hours[i];
        const hourElem = document.createElement('li');
        hourElem.classList.add('hourly-data');
        hourElem.setAttribute('index', `${i}`);
        dayElem.appendChild(hourElem);

        const time = document.createElement('div');
        time.classList.add('hourly-time');
        time.textContent = hour.time;

        const conditionIcon = document.createElement('img');
        conditionIcon.classList.add('forecast-condition');
        conditionIcon.src = hour.condition.icon;
        conditionIcon.alt = hour.condition.text;

        const temp = document.createElement('div');
        temp.classList.add('forecast-temperature');
        temp.textContent = hour.temp;

        appendChildren(hourElem, time, conditionIcon, temp);
    }
}

// Create a HTML box and populate it with hourly forecast data
export function populateHourlyForecastWeather(weather) {
    buildHourlyForecast(weather);
    const hourlyForecast = document.querySelector('.hourly-forecast-container');
    const forecast = weather.getForecastDays();
    
    for (const day of forecast) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day-hourly',`${day.date}`);
        hourlyForecast.appendChild(dayElement);

        const title = document.createElement('div');
        title.classList.add('day-title', `${day.date}`);
        title.textContent = day.date;

        const hourlyData = document.createElement('ul');
        hourlyData.classList.add('hourly-forecast-body', `${day.date}`);

        appendChildren(dayElement, title, hourlyData);

        populateHourlyRecords(day, hourlyData);
    }
}

// Add class on "Show Hourly Data" button to mark it as currently selected
export function selectHourlyForecast() {
    const showDailyButtons = document.querySelectorAll('.show-daily-forecast');
    const showHourlyButtons = document.querySelectorAll('.show-hourly-forecast');
    showDailyButtons.forEach((btn) => btn.classList.remove('forecast-selected'));
    showHourlyButtons.forEach((btn) => btn.classList.add('forecast-selected'));
}