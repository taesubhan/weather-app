// Module that stores the state of the webpage e.g. Whether to display fahrenheit or celsius data
export default {
    forecast: 'daily',
    tempScale: 'fahrenheit',

    setForecastToDaily() {
        this.forecast  = 'daily';
    },

    setForecastToHourly() {
        this.forecast = 'hourly';
    },

    getForecast() {
        return this.forecast;
    },

    setToFahrenheit() {
        this.tempScale = 'fahrenheit';
    },

    setToCelsius() {
        this.tempScale = 'celsius';
    },

    getTempScale() {
        return this.tempScale;
    }
}