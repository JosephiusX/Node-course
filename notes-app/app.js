const chalk = require('chalk');
const getNotes = require('./notes.js');

const command = process.argv[2] // naming the third command line argument

console.log(process.argv);  // shows me the command line arguments

if (command === 'add') { // if the command is : node app.js add
    console.log('Adding note!')
} else if (command === 'remove') { // else if : node app.js remove
    console.log('Removing note!')
}