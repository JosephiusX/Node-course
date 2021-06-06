# Node-course

sec3 L.10

    If I require utils.js in my app.js file, both files will run when I run app.js

    even though I require utils.js its its variables are not avalible to app.js and it goes both ways. they are locally scoped

    this is why we use module.exports

L.11 Importing Npm Modules

    npm i validator
    node does not support the this keyword

L.12 Printing in color exercize

    install and use chalk from npm

L.13 Global npm modules and nodemon

    npm i nodemon -g
    in the file directory run nodemon 'file.name'  instead of node

L.16 Argument parsing with yargs

    npm i yargs

L.19 Adding a note

L.22 Refactoring arrow functions

    // to test if everything is working refactored
    in notes-app dir:
    node app.js remove --title="List" : to remove the note
    // running the same command again : shows what happens when ther is no note to edit
    node app.js add --title="t" --body="b" : to add a note

L.30 Callstack Callback queue, event loop

L.31 Making http request ( sign up for weather stack)

    weather api
    API access key : fcbecc958bca8e867c813ba8ff9825de

L.33 An HTTP Request Challange

    Sign up at free at mapbox.com for an access token:
        pk.eyJ1IjoiZ3JhbWtyYWNrZXIiLCJhIjoiY2tvbTUzZXhqMGFuYTJ2bDZkMnozeHo1NCJ9.pvL5mbZl8DZuAjtBZR3tUA


    password: password
    username: my email

L.34

L.35 The callback function : 4-callbacks.js

    a function we provide as the argument to another function

    challange: links.mead.io/callback