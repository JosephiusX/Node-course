// CRUD create read update delete

const mongodb = require('mongodb') // npm library, mongodb driver created by mongodb so that it can work with node js
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => { // use connect method to connect to a diffrent server
    if(error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName) // get connection for specific database

    db.collection('users').insertOne({ // we create a collection called users and we insert one users name and age
        name: 'Andrew',
        age: 27
    })
})