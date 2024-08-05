export function setSelectedTempScale(weather) {
    if (weather.getTempScale() === 'fahrenheit') {
        selectFahrenheit();
    } else if (weather.getTempScale() === 'celsius') {
        selectCelsius();
    }
}

export function selectFahrenheit() {
    const fahrenheitBtn = document.querySelector('.set-to-fahrenheit');
    const celsiusBtn = document.querySelector('.set-to-celsius');
    fahrenheitBtn.classList.add('selected-temp-scale');
    celsiusBtn.classList.remove('selected-temp-scale');
}

export function selectCelsius() {
    const celsiusBtn = document.querySelector('.set-to-celsius');
    const fahrenheitBtn = document.querySelector('.set-to-fahrenheit');
    celsiusBtn.classList.add('selected-temp-scale');
    fahrenheitBtn.classList.remove('selected-temp-scale');
}