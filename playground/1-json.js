 fs = require('fs')
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}


// const bookJSON = JSON.stringify(book) // takes the object and turns it into a JSON string
// console.log(bookJSON); // bookJSON  is a string now as far as js is concerned it cant be treated like an object in this state

// const parsedData = JSON.parse(bookJSON) // takes in the JSON string and gives us back an object 
// console.log(parsedData.author) // now we can use object methods
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title) 

const dataBuffer = fs.readFileSync('1-json.json'); // 1. Load json data
const dataJson = dataBuffer.toString(); 
const parsedData = JSON.parse(dataJson); // parse

const newName = parsedData.name = 'Joseph'; // change name
const newAge = parsedData.age = 29; // change age

const changedJson = JSON.stringify(parsedData) // trun back to json string

fs.writeFileSync('1-json.json',  changedJson) // write changes to file


console.log(changedJson);

