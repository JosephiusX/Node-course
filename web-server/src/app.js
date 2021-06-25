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
        title: 'help',
        helpText: 'This is some helpful text.',
        name: 'Joseph Granville'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
       title: 'About Me',
       name: 'Joseph Granville' 
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address) { // if there is no address in the query string
        return res.send({
            error: ' You must provide an address!'
        })
    }

res.send({
    forcast: 'sunney',
    location: 'Los Angeles',
    address: req.query.address
})
})

app.get('/products', (req, res) => {
    if (!req.query.search) { // if there is no search term
        return res.send({
            error: 'You must provide a search term'
        })
    }

    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => { // http://localhost:3000/help/blabla , help 404
    res.render('404', {
        title: '404',
        name: 'Joseph Granville',
        errorMessage:'help article not found'
    })
})

app.get('*', (req, res) => { // match anything that hasent been matched so far
    res.render('404', {
        title: '404',
        name: 'Joseph Granville',
        errorMessage: 'Page not found'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})