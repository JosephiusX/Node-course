const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=fcbecc958bca8e867c813ba8ff9825de&query=37.8267,-122.4233&units=f'

request({ url: url, json: true } ,(error, response) => {
    // console.log(response.body.current)
    const temp = response.body.current.temperature;
    const rainChance = response.body.current.precip;
    console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${temp} degrees out. There is ${rainChance}% chance of rain.`)
})

