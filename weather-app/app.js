const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('San Francisco', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
    forecast(data.lattitude, data.longitude, (error, data) => {
      console.log('Error', error)
      console.log('Data', data)
  })
})

