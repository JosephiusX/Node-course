const mongoose = require('mongoose')
const validator = require('validator')

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

module.exports = User // exporting object user