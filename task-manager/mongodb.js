// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => { // use connect method to connect to a diffrent server
    if(error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName) // get connection for specific database

    // db.collection('users').updateOne({ // updating one
    //     _id: new ObjectID("60db61aff44b4905d0147ae1") // we select the object by its id
    // }, {
    //     $inc: { // select the key with the value we want to change
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('documents').updateMany({
         completed: false
    }, { 
        $set:{ 
            completed: true
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})
