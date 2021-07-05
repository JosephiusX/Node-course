const mongoose = require('mongoose')

const Task = mongoose.model('Task', {
    task: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref : 'User' // references another model, now we can easally fetch a user profile when we have access to an individual task
    }
})

module.exports = Task