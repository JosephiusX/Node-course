const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0')
// add, remove, reaed,  list

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note!')
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'list a note',
    handler: function () {
        console.log('listing note')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function () {
        console.log('read the note')
    }
})


console.log(yargs.argv); // yargs version of arg v
