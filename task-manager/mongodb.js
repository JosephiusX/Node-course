// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => { // use connect method to connect to a diffrent server
    if(error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName) // get connection for specific database

    // db.collection('users').findOne({_id: ObjectID("60db8087e0de2d13d070df10")}, (error, user) => {
    //     if(error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({ age: 27 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({ age: 27 }).count((error, count) => {
    //     console.log(count)
    // })

    // CHALLANGE

    db.collection('documents').findOne({_id: ObjectID("60db71aa375ae808d01f8629")}, (error, documents) => {
        if(error) {
            return console.log('Unable to fetch')
        }
        console.log(documents)
    })

    db.collection('documents').find({ completed: false }).toArray((error, documents) => {
        console.log(documents)
    })


})