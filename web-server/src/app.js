const path = require('path'); // core node module, no install needed
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// setup handlebars engine and views location
app.set('view engine', 'hbs') // for handlebars module
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('',(req, res) => {
    res.render('index', { // in this case we have the file and the second argument is an object that we can use to make the page dynamic
        title: 'Weather App',
        name: 'Joseph Granville'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'Andrew Mead'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
       title: 'About Me',
       name: 'Joseph Granville' 
    })
})

app.get('/weather', (req, res) => {
res.send({
    title: 'weather',
    forcast: 'sunney',
    location: 'Los Angeles',
})
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})