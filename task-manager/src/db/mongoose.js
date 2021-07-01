const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', { // connecting mongoose to the database
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const User = mongoose.model('User', { // seting up schema
    name: {
        type: String,
        required: true,
        trim: true // trimming spaces before or after
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase:true, // converts email to lowercase before saving
        validate(value) {
            if (!validator.isEmail(value)) { //
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value){
            if(value.includes('password')) {
                throw new Error('password cannot contain "password"')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }  
    }
})

// const me = new User({
//     name: '  Joseph ',
//     email: 'ALFAAKDLJFN@GMAIL.COM',
//     password: '  jfq;wjfnjkes33  '
// })

// me.save().then(() =>{ // save user
//     console.log(me)
// }).catch((error) => { // in case of error
//     console.log('Error!', error)
// })

const task = mongoose.model('task', {
    task: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const chore = new task({
    completed:true
})

chore.save().then(() =>{
    console.log(chore)
}).catch((error) => { 
    console.log('Error!', error)
})