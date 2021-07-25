const express = require('express')
require('./db/mongoose') // this just runs the mongoose file when this file is run
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express() 
const port = process.env.PORT || 3000 // seting up for heroku deploument

///////////////// file upload example

const multer = require('multer')

const upload = multer({
    dest: 'avatar'
})

app.post('/upload', (req, res) => {
    res.send()
})


app.use(express.json()) //automatically parse incoming json to an object so we can access it in our request handler 
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})

const Task = require('./models/task')
const User = require('./models/user')


const main = async () => {
    // const task = await Task.findById('60fdabe56f839035a405c651')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner);
    
    const user = await User.findById('60fdabd76f839035a405c64c')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks);
}

main()