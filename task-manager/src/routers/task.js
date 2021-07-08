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
// GET /tasks?completed=true
// GET /tasks?limit=10&skip=20
// GET /tasks?sortBy=createdAt:desc
router.get('/tasks', auth, async (req, res) => { // read route task
    const match =  {} // create match as an empty object
    const sort = {}

    if (req.query.completed) { // if request query completed is true
        match.completed = req.query.completed === 'true' // we set match objects completed value to request objects querys object completed keys value to true  
      } // next

      if(req.query.sortBy) {
          const parts = req.query.sortBy.split(':') // whatever special character i want to use to seporate
          sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
      }

    try{
        await req.user.populate({ 
            path: 'tasks',
            match : match, // or just match for short 
            options: { // for pagination
                limit: parseInt(req.query.limit), // set the ammount that show equal to the quiry string limit value 
                skip: parseInt(req.query.skip), // turning what i get from the query string to a number
                sort // shorthand 
            }
        }).execPopulate()
        res.send(req.user.tasks)
    } catch (e) {
        res.status(500).send(e) 
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