const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
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
},{
    timestamps: true
})

const Task = mongoose.model('Task', taskSchema )

module.exports = Task