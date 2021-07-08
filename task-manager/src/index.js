const express = require('express')
require('./db/mongoose') // this just runs the mongoose file when this file is run
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express() 
const port = process.env.PORT || 3000 // seting up for heroku deploument

// app.use((req, res, next) => { 
//    if (req.method === 'GET') {
//     res.send('GET requests are disabled')
//    } else {
//        next()
//    }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon!')
// })

app.use(express.json()) //automatically parse incoming json to an object so we can access it in our request handler 
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById('60e293950ea8538888cbfd25')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    // const user = await User.findById('60e291b47322bb30485eff45')
    // await user.populate('tasks').execPopulate()
    // console.log(user.tasks)
}

main()
