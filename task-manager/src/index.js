const express = require('express')
require('./db/mongoose') // this just runs the mongoose file when this file is run
const User = require('./models/user')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json()) //automatically parse incoming json to an object so we can access it in our request handler 

app.post('/users', (req, res) => {
    const user = new User(req.body) // set user new requst body object

    user.save().then(() => {
        res.send(user)
    }).catch((e) => {
        res.status(400).send(e) // setting status of error to 404
    })
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})