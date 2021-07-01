const express = require('express')
require('./db/mongoose') // this just runs the mongoose file when this file is run
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json()) //automatically parse incoming json to an object so we can access it in our request handler 

app.post('/users', (req, res) => {
    const user = new User(req.body) // set user new requst body object

    user.save().then(() => { // if promise is fufilled
        res.send(user)
    }).catch((e) => { // if promise is rejected
        res.status(400).send(e) // setting status of error to 404
    })
})

app.get('/users', (req, res) => {
    User.find({}).then((users) => {
        res.send(users)
    }).catch((e) => {
        res.status(500).send()
    })
})

app.get('/users/:id', (req, res) => {
    const _id = req.params.id

    User.findById(_id).then((user) => {
        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    }).catch((e) => {
        res.status(500).send()
    })
    
})

app.post('/task', (req, res) => {
    const study = new Task(req.body)

    study.save().then(() => { 
        res.send(task)
    }).catch((e) => { 
        res.status(400).send(e)
    })
})

app.get('/tasks', (req, res) => { // read route /task
    Task.find({}).then((tasks) => { // find all tasks defined in task file
        res.send(tasks) // send
    }).catch((e) => {
        res.status(500).send()
    })
})

app.get('/task/:id', (req, res) => {
    const _id = req.params.id

    Task.findById(_id).then((task) => {
        if (!task) {
            return res.status(404).send()
        }

        res.send(task)
    }).catch((e) => {
        res.status(500).send()
    })
    
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})