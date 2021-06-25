const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2] // the second command line argument

if (!address) { // if there is no address
  console.log('Please provide an address')
} else {
  geocode(address, (error, { longitude, latitude, location} = {}) => {
    if(error) {
      console.log(error)
    }
  
      forecast(longitude, latitude, (error, forcastData) => {
        if (error) {
          return console.log(error)
        }
  
        console.log(location)
        console.log(forcastData)
    })
  })
}

console.log(process.argv)

// Goal: Accept location via command line argument

// 1. Access the command line argument without yargs
// 2. use the string value as th input for geocode
// 3. Only geocode if a location was provided
// 4. Test your work with a couple locations



