const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/users',  async(req, res) => { // adding async chabges behavior of function from returning a value to returning a promise
    const user = new User(req.body) // set user new requst body object

    try { // if promise is fufilled
        await user.save() // awaiting a promise for user to save (waits for user to save before moving on )
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token }) // this code cant run unless the promise above it is fufilled. 
    } catch (e) { // if the promise(await) above fails this runs
        res.status(400).send(e) // send bad request status
    }
})

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user, token})
    } catch (e) {
        res.status(400).send()
    }
})

// router.get('/users', auth, async (req, res,) => { // users get route
//     try{ // if promise is fufilled
//         const users = await User.find({}) // await User.find({}) and assign it to users when fufilled
//         res.send(users) // renders only id above await is fufilled
//     } catch (e) { // if above await is rejected ( error as input)
//         res.status(500).send(e) // respond with status of server error and send error
//     }
// })


router.get('/users/me', auth, async(req, res) => { // users get route
    res.send(req.user)
 })

router.get('/users/:id', async(req, res) => { // view user by id
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

router.patch('/users/:id', async (req, res) => { // route for updating users by id
    const updates = Object.keys(req.body) // the object keys on request body  equivilant to updates
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update)) // if everything in updates array is one of the items in allowedUpdates array than returns true else returns false

    if(!isValidOperation) { // if it did not return true
        return res.status(400).send({error: 'Invalid updates!'}) // send error code along with message to let user know why it was rejected
    }

    try { // if promise is ufilled
        const user = await User.findById(req.params.id)

        updates.forEach((update) => user[update] = req.body[update]) // bracket notation in this case  makes it more dynamic
        await user.save()

        // const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true}) //  await Promise find User by Id found in req.params.id , sending what we want changed in req.body, run validators and stuff on what we send in req.body, call the result user

        if (!user) { // if there is no user
            return res.status(404).send() // return not found and send and thats the end of it
        } // otherwise
        res.send(user) // send user
    } catch (e) { // if await is rejected
        res.status(400).send(e) // send bad request error
    }
})

router.delete('/users/:id', async(req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if(!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router