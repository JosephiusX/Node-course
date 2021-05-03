const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => { // function responsible for adding a note with title and body args
    const notes = loadNotes()
    // const duplicateNotes = notes.filter((note => note.title === title)) // this function is going to run for every item in notes array then adds every note loaded with a title matching the argv title
    const duplcateNote = notes.find((note) => note.title === title) // returns the first match if any,     using the same function as we would with filter only find stops once if a match is found, will return undefined if no match is found
    
    if(!duplicateNote) { // if we didnt find a duplicate  then
        notes.push({ // we can safely create the note
            title: title,
            body: body
        })
        console.log(notes);
        saveNotes(notes) // calling saveNotes function below and passing in notes array
        console.log('New note added!')
    } else { // if there is a duplicate note
        console.log('Note title taken!')
    }
}

const removeNote = (title) => {
    const notes = loadNotes() // load existing notes
    const notesToKeep = notes.filter( (note) => note.title !== title) // this function is going to run for every item in notes array , add every note loaded with a title NOT matching the argv title
         
    
    if(notes.length > notesToKeep.length) { // if the lingth is diffrent
        console.log(chalk.green.inverse('Note reomved!')) // console log with npm package chalk
        saveNotes(notesToKeep) // save
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()

    const note = notes.find((note) => note.title === title)

    if (note) { // if there is a matching note
        console.log(chalk.inverse(note.title))
        console.log(note.body)
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
    removeNote: removeNote, // export removeNote function
    listNotes: listNotes, // export listNote Function
    readNote: readNote // export reaeNote function
}