const request = require('request');

// const url = 'http://api.weatherstack.com/current?access_key=fcbecc958bca8e867c813ba8ff9825de&query=37.8267,-122.4233&units=f';

// request({ url: url, json: true } ,(error, response) => {
//     if (error) { // for when the error message exists and the response does not
//         console.log('unable to connect to weather services!')
//     } else if (response.body.error) { // this if for when there are no matching results
//         console.log('Unable to find location')
//     } else {
//         const temp = response.body.current.temperature;
//         const rainChance = response.body.current.precip;
//         console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${temp} degrees out. There is ${rainChance}% chance of rain.` )
//     }
// })

// Geocoding
// address -> Lat/Long -> weather

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoiZ3JhbWtyYWNrZXIiLCJhIjoiY2tvbTUzZXhqMGFuYTJ2bDZkMnozeHo1NCJ9.pvL5mbZl8DZuAjtBZR3tUA&limit=1'

request({ url: geocodeURL, json: true } ,(error, response) => {
    if (error) {
        console.log('unable to connect to location services!')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location')
    } else {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log(latitude, longitude)
    }
});