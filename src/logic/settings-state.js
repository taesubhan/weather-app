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