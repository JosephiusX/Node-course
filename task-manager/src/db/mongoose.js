const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', { // connecting mongoose to the database
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

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
