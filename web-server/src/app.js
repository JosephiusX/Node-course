const path = require('path'); // core node module, no install needed
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))


app.get('/weather', (req, res) => {
res.send({
    forcast: 'sunney',
    location: 'Los Angeles',
})
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})