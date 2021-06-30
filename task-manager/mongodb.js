// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => { // use connect method to connect to a diffrent server
    if(error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName) // get connection for specific database

    // db.collection('users').deleteMany({
    //     age: 27
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
    
    db.collection('users').deleteOne({
        name: 'Vicram'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})
