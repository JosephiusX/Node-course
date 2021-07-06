const express = require('express') // require express
const Task = require('../models/task') // requier task schema
const auth = require('../middleware/auth')
const router = new express.Router() // require router

router.post('/tasks', auth, async(req, res) => { // post a task route
    const task = new Task({
       ...req.body,
       owner: req.user._id
    })
    try{ // if promise is fufilled
        await task.save() // await saving req.body 
        res.status(201).send(task) // if above is fufilled we set status and send task
    } catch (e) { // if ist rejected
        res.status(400).send(e) // set status bad request to and send
    }
})

router.get('/tasks', auth, async(req, res) => { // read route task
    try{
        // const tasks = await Task.findOne({_id, owner: req.user._id}) // or
        await req.user.populate('tasks').execPopulate()
        res.send(req.user.tasks) // if above is resolved we send tasks
    } catch (e) { // if its rejected
        res.status(500).send(e) // we set the status to server error and send
    }
})

router.get('/tasks/:id', auth, async (req, res) => { // find task by id route
    const _id = req.params.id // we are grabing id from the query string and setting it equivilant to _id

    try { // if promise if fufilled
        const task = await Task.findOne({ _id, owner: req.user._id})

        if(!task) { // if no task 
            return res.status(404).send() // return not found error status ending the chain
        }// othrwise

        res.send(task) // send the task
    } catch (e){ // if await is rejected
        res.status(500).send() // send this status error
    }
})

router.patch('/tasks/:id', auth, async(req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['task', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if(!isValidOperation) { // if it did not return true
        return res.status(400).send({error: 'Invalid updates!'}) // send error code along with message to let user know why it was rejected
    }

    try{
        const task = await Task.findOne({ _id: req.params.id, owner: req.user._id})

        if (!task) { // if there is no task
            return res.status(404).send() // return not found and send and thats the end of it
        } // otherwise
            
            updates.forEach((update) => task[update] = req.body[update]) 
            await task.save()
        res.send(task) // send task
    } catch (e) { // if await is rejected
        res.status(400).send(e) // send bad request error
    }
})

router.delete('/tasks/:id', auth, async(req, res) => {
    try {
        const task = await Task.findOneAndDelete({ _id: req.params.id, owner: req.user._id})

        if(!task) {
            res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router