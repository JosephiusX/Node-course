const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes...'
}

const addNote = (title, body) => { // function responsible for adding a note with title and body args
    const notes = loadNotes()
    const duplicateNotes = notes.filter( (note => note.title === title)) // this function is going to run for every item in notes array
         // add every note loaded with a title matching the argv title
    

    if(duplicateNotes.length === 0) { // if we didnt find any duplicates then
        notes.push({ // we can safely create the note
            title: title,
            body: body
        })
        console.log(notes);
        saveNotes(notes) // calling saveNotes function below and passing in notes array
        console.log('New note added!')
    } else { // if there are duplicates
        console.log('Note title taken!')
    }

}

const removeNote = (title) => {
    const notes = loadNotes() // load existing notes
    const notesToKeep = notes.filter( (note) => note.title !== title) // this function is going to run for every item in notes array
         // add every note loaded with a title NOT matching the argv title
    
    if(notes.length > notesToKeep.length) { // if the lingth is diffrent
        console.log(chalk.green.inverse('Note reomved!')) // console log with npm package chalk
        saveNotes(notesToKeep) // save
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
}




const saveNotes = (notes) => { // saveNotes function
    const dataJSON = JSON.stringify(notes) // turn notes into JSON string
    fs.writeFileSync('notes.json', dataJSON) // save that JSON to file notes.json using file system module

}

const loadNotes = () => { // loading the notes objects from the notes.json file
    try { // if either of thease lines throws an error.. 
        const dataBuffer = fs.readFileSync('notes.json') // file we will be reading and writing to
        const dataJSON = dataBuffer.toString() // convert dataBuffer into a string
        return JSON.parse(dataJSON) // parse dataJSON
    } catch (e) { // the code will stop and run catch instead
        return [] // return empty array 
    }

    
}

module.exports = { // set this to an object containing multiple functions instead of one
    getNotes: getNotes, // property getNotes
    addNote: addNote, // exporting addNote function
    removeNote: removeNote // export remove Note
}