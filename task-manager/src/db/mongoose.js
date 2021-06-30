const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', { // connecting mongoose to the database
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', { // seting up schema
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

// const me = new User({
//     name: 'Joseph', // only works with a string
//     age: 'mike' // only works with a number
// })

// me.save().then(() =>{ // save user
//     console.log(me)
// }).catch((error) => { // in case of error
//     console.log('Error!', error)
// })

const task = mongoose.model('task', {
    task: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const chore = new task({
    task: 'take out the trash',
    completed: false
})

chore.save().then(() =>{
    console.log(chore)
}).catch((error) => { 
    console.log('Error!', error)
})