const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({ // seting up schema
    name: {
        type: String,
        required: true,
        trim: true // trimming spaces before or after
    },
    email: {
        type: String,
        unique: true, //  error if an email in db is already in use
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

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({email}) // same as email: email

    if (!user) { // if that dosent work
        throw new Error('Unable to login')
    } // otherwise

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch) {
        throw new Error('Unable to login')
    }

    return user
}

// Password hashed onsave Middleware
userSchema.pre('save', async function (next) { // apply middleware to userSchema, Pre runs action before save , we need a regular function instead of an arrow because of the this binding, pass next as paramiter
    const user = this // set this value equivilant to user

    if (user.isModified('password')) { // If a user modifies password
        user.password = await bcrypt.hash(user.password, 8) // use bcrypt to automatically hash password
    }

    next() // 
})

const User = mongoose.model('User', userSchema)

module.exports = User // exporting object user