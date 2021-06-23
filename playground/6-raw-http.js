const http = require('http'); // core module. dosent need installed

const url = 'http://api.weatherstack.com/current?access_key=fcbecc958bca8e867c813ba8ff9825de&query=40,-75&units=f'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data) // turns data into json obj
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()