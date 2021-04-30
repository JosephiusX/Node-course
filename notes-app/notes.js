const fs = require('fs')

const getNotes = () => {
    return 'Your notes...'
}

const addNote = (title,body) => { // function responsible for adding a note
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) { // this function is going to run for every item in notes array
        return note.title === title // using equality operator to check if note.title equals title, returns a boolean
    })

    if(duplicateNotes.length === 0) { // if we didnt find any duplicates
        notes.push({ // we can safely create the note
            title: title,
            body: body
        })

        console.log(notes);
    
        saveNotes(notes)
        console.log('New note added!')
    } else { // if there are duplicates
        console.log('Note title taken!')
    }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)

}

const loadNotes = () => {
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
    addNote: addNote
}