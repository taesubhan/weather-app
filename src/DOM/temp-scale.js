// Changes the settings-state module to be either Fahrenheit or Celsius
export function setSelectedTempScale(weather, FahrenheitBtn, CelsiusBtn) {
    if (weather.getTempScale() === 'fahrenheit') {
        setAsSelectedScale(FahrenheitBtn);
    } else if (weather.getTempScale() === 'celsius') {
        setAsSelectedScale(CelsiusBtn);
    }
}

// Accepts two button elements: the first will receive a class indicating that it is selected, while the second will have it removed
function setAsSelectedScale(selectedBtn, deselectedBtn=null) {
    selectedBtn.classList.add('selected-temp-scale');
    if (deselectedBtn) {
        deselectedBtn.classList.remove('selected-temp-scale');
    }
}

// Changes the settings-state module to be Fahrenheit
export function selectFahrenheit() {
    const fahrenheitBtn = document.querySelector('.set-to-fahrenheit');
    const celsiusBtn = document.querySelector('.set-to-celsius');
    setAsSelectedScale(fahrenheitBtn, celsiusBtn);
}

// Changes the settings-state module to be Celsius
export function selectCelsius() {
    const celsiusBtn = document.querySelector('.set-to-celsius');
    const fahrenheitBtn = document.querySelector('.set-to-fahrenheit');
    setAsSelectedScale(celsiusBtn, fahrenheitBtn);
}