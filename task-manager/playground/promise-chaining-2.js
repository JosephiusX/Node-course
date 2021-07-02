require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('60dcc0d83f9d131174d42b7d', {task: 'get a life' }).then((task) => { // selecting the task by id and and changing the value of task, then
//     console.log(task)
//     return Task.countDocuments({ completed: false }) // count 
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ 'completed': false })
    return count
}

deleteTaskAndCount('60dd1f42040002646471d9f8', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})