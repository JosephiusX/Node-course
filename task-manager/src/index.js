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

const bcrypt = require('bcryptjs')

const myFunction = async () => {
    const password = 'Red12345!'
    const hashedPassword = await bcrypt.hash(password, 8)

    console.log(password)
    console.log(hashedPassword)

    const isMatch = await bcrypt.compare('red12345!', hashedPassword)
    console.log(isMatch)
}

myFunction()