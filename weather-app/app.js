const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=fcbecc958bca8e867c813ba8ff9825de&query=37.8267,-122.4233'

request({ url: url} ,(error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})