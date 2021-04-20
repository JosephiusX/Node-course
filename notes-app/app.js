const validator = require('validator') // require after npm i
const getNotes = require('./notes.js');

const msg = getNotes()
console.log(msg);

console.log(validator.isEmail('andrew@example.com')); // returns true because the string does have the format of an email
console.log(validator.isEmail('example.com')); // false

console.log(validator.isURL('https://mead.io'))  // true : has the format of a url
console.log(validator.isURL('https://meio')) // false

















