const express = require('express')
require('./db/mongoose') // this just runs the mongoose file when this file is run
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express() 
const port = process.env.PORT || 3000 // seting up for heroku deploument

app.use(express.json()) //automatically parse incoming json to an object so we can access it in our request handler 
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})

const jwt = require('jsonwebtoken')

const myFunction = async () => {
    const token = jwt.sign({_id: 'abc123' }, 'thisismynewcourse', {expiresIn: '7 days'})
    console.log(token)

    const data = jwt.verify(token, 'thisismynewcourse')
    console.log(data)
}

myFunction()
