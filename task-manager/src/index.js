const express = require('express')
require('./db/mongoose') // this just runs the mongoose file when this file is run
const User = require('./models/user') // User Schema
const Task = require('./models/task') // Task Schema

const app = express() 
const port = process.env.PORT || 3000 // seting up for heroku deploument

app.use(express.json()) //automatically parse incoming json to an object so we can access it in our request handler 

app.post('/users',  async(req, res) => { // adding async chabges behavior of function from returning a value to returning a promise
    const user = new User(req.body) // set user new requst body object

    try { // if promise is fufilled
        await user.save() // awaiting a promise for user to save (waits for user to save before moving on )
        res.status(201).send(user) // this code cant run unless the promise above it is fufilled. 
    } catch (e) { // if the promise(await) above fails this runs
        res.status(400).send(e) // send bad request status
    }
})

app.get('/users', async(req, res) => { // users get route
    
    try{ // if promise is fufilled
        const users = await User.find({}) // await User.find({}) and assign it to users when fufilled
        res.send(users) // renders only id above await is fufilled
    } catch (e) { // if above await is rejected ( error as input)
        res.status(500).send(e) // respond with status of server error and send error
    }
})

app.get('/users/:id', async(req, res) => { // view user by id
    const _id = req.params.id // getting the id from the query string

    try { // if promise is fufilled
        const user = await User.findById(_id) // await result of User.findById and assign it to user const
        
        if (!user) { // if no user with said id as written above
            return res.status(404).send() // return error stopping code
        } // otherwise

        res.send(user) // render the user
    } catch (e) {       // if await is rejected
        res.status(500).send() // set status server error and send
    }    
})

app.patch('/users/:id', async (req, res) => { // route for updating users by id
    const updates = Object.keys(req.body) // the object keys on request body  equivilant to updates
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update)) // if everything in updates array is one of the items in allowedUpdates array than returns true else returns false

    if(!isValidOperation) { // if it did not return true
        return res.status(400).send({error: 'Invalid updates!'}) // send error code along with message to let user know why it was rejected
    }

    try { // if promise is ufilled
        //  await Promise find User by Id found in req.params.id , sending what we want changed in req.body, run validators and stuff on what we send in req.body, call the result user
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true})

        if (!user) { // if there is no user
            return res.status(404).send() // return not found and send and thats the end of it
        } // otherwise
        res.send(user) // send user
    } catch (e) { // if await is rejected
        res.status(400).send(e) // send bad request error
    }
})

app.post('/tasks', async(req, res) => { // post a task route
    const task = new Task(req.body) // task is equivilant to the json we place in the request body

    try{ // if promise is fufilled
        await task.save() // await saving req.body 
        res.status(201).send(task) // if above is fufilled we set status and send task
    }catch { // if ist rejected
        res.status(400).send() // set status bad request to and send
    }
})

app.get('/tasks', async(req, res) => { // read route task
    try{
        const tasks = await Task.find({}) // await finding of all Task objects and set that list equivilant to tasks
        res.send(tasks) // if above is resolved we send tasks
    } catch { // if its rejected
        res.status(500).send() // we set the status to server error and send
    }
})

app.get('/tasks/:id', async(req, res) => { // find task by id route
    const _id = req.params.id // we are grabing id from the query string and setting it equivilant to _id

    try{ // if promise if fufilled
        const task = await Task.findById(_id) // wait for the task to be found by id and set it equivilant to task

        if(!task) { // if no task 
            return res.status(404).send() // return not found error status ending the chain
        }// othrwise
        res.send(task) // send the task
    }catch (e){ // if await is rejected
        res.status(500).send() // send this status error
    }
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})