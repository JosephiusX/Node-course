
const fs = require('fs'); // loading the node file system lib

// fs.writeFileSync('notes.txt', 'My name is Joseph.') // creates a file with the node js fs(file System) built in module

fs.appendFileSync('notes.txt', 'data appended');
