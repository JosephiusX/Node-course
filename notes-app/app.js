const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0')
// add, remove, reaed,  list

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:  {
       title: {
           describe: 'Note title',
           demandOption: true, // meaning it has to be provided in order for the command to work
           type: 'string'
       },
       body: {
           describe: 'Note body', 
           demandOption: true,
           type: 'string'
       }
    },
    handler(argv) { // setting the command line command
        notes.addNote(argv.title, argv.body) // run the addNote function usin argv.title as the title and argv.body for the body
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builer:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) { // for an object method the : is no longer needed no function keyword needed either
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'list a note',
    handler: function () {
        console.log('listing all notes')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: () => {
        console.log('read the note')
    }
})


// console.log(yargs.argv); // yargs version of arg v

yargs.parse() // runs yargs as well as 