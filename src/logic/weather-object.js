import { convertTo12HourClock } from './logic-functions.js';
import pageState from './settings-state.js';

// Factory function that returns an object which contains methods used to interact with the weather object retrieved from the API
function createWeatherObjectMethods() {
    
    function turnToDegrees(temp) {
        return `${Math.round(temp)}°`
    }
    
    function getTemp(temp_f, temp_c) {
    // const getTemp = (temp_f, temp_c) => {
        // console.log('test', this.tempScale);
        if (pageState.getTempScale() === 'fahrenheit') {
            return turnToDegrees(temp_f);
        } else if (pageState.getTempScale() === 'celsius') {
            return turnToDegrees(temp_c);
        } else {
            throw new Error('Object is neither set to fahrenheit nor celsius');
        }
    }

    function setToFahrenheit() {
        pageState.setToFahrenheit();
    }

    function setToCelsius() {
        pageState.setToCelsius();
    }

    function getTempScale() {
        return pageState.getTempScale();
    }

    function getLocation() {
        return {
            city: this.location.name,
            region: this.location.region,
            country: this.location.country,
            localTime: convertTo12HourClock(this.location.localtime)
        };
    }

    function getCurrentTemperature() {
        return {
            fahrenheit: getTemp(this.current.temp_f, this.current.temp_c), 
            // celsius: turnToDegrees(this.current.temp_c)
        };
    }

    function getCurrentCondition() {
        return {text: this.current.condition.text, icon: `https:${this.current.condition.icon}`};
    }

    function getCurrentWeatherInfo() {
        return {
            feelslike_f: getTemp(this.current.feelslike_f, this.current.feelslike_c),
            humidity: `${this.current.humidity}%`,
            uv: this.current.uv,
            visibility: `${this.current.vis_miles} mi`,
            wind_mph: `${Math.round(this.current.wind_mph)} mph`,
            pressure_in: `${Math.round(this.current.pressure_in)} in`
        }
    }
    
    function getMaxMinTempToday() {
        return {
            max: getTemp(this.forecast.forecastday[0].day.maxtemp_f, this.forecast.forecastday[0].day.maxtemp_c), 
            min: getTemp(this.forecast.forecastday[0].day.mintemp_f, this.forecast.forecastday[0].day.mintemp_c)
        };
    }

    function getHourlyData(hours, now, self) {
        const result = [];
        
        for (const hour of hours) {
            if (now > hour.time) {
                continue;
            }
            result.push({
                time: convertTo12HourClock(hour.time),
                temp: getTemp(hour.temp_f, hour.temp_c),
                condition: {
                    text: hour.condition.text,
                    icon: `https:${hour.condition.icon}`
                }
            })
        }
        return result;
    } 

    function getForecastDays() {
        const result = [];
        for (const forecastDay of this.forecast.forecastday) {
            result.push( {
                date: forecastDay.date,
                max: getTemp(forecastDay.day.maxtemp_f, forecastDay.day.maxtemp_c),
                min: getTemp(forecastDay.day.mintemp_f, forecastDay.day.mintemp_c),
                condition: {
                    text: forecastDay.day.condition.text, 
                    icon: `https:${forecastDay.day.condition.icon}`
                },
                hours: getHourlyData(forecastDay.hour, this.location.localtime, this)
            })
        }
        return result;
    }

    function isDay() {
        return this.current.is_day === 1;
    }

    return {setToFahrenheit, setToCelsius, getTempScale, getLocation, getCurrentTemperature, getCurrentCondition, getCurrentWeatherInfo, getMaxMinTempToday, getForecastDays, isDay};
} 

// Combines the object from the API and the object that holds all the methods (created from "createWeatherObjectMethods()")
export function createWeatherObject(responseObj) {
    return Object.assign({}, responseObj, createWeatherObjectMethods());
}