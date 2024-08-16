import { createWeatherObject } from './weather-object.js';

// Makes a request to the weather API to retrieve weather object based on location parameter 
export async function getWeather(location) {
    //Delete later
    // const wait = () => {
    //     return new Promise ((resolve, reject) => setTimeout(resolve, 5000));
    // }
    // await wait();
    //
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=a07423bee1184831ba1224536240806&q=${location}&days=3`, {mode:'cors'});
    const respObj = await response.json();

    console.log('first', respObj);

    checkResponseErrors(respObj);

    const newObj = createWeatherObject(respObj);

    return newObj;
   
}

// Checks the API response object to see if it has any errors, and if it does it throws that error
function checkResponseErrors(response) {
    if (!response.hasOwnProperty('error')) {
        return;
    } else {
        if (response.error.code === 1003) {
            throw new Error('Please do not submit empty search bar');
        } else if (response.error.code === 1006) {
            throw new Error('No location found matching your search');
        } else {
            throw new Error(response.error.message);
        }
    }
}


