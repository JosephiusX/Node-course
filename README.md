# Node-course

sec3 10

    If I require utils.js in my app.js file, both files will run when I run app.js

    even though I require utils.js its its variables are not avalible to app.js and it goes both ways. they are locally scoped

    this is why we use module.exports

    11 Importing Npm Modules

        npm i validator
        node does not support the this keyword

    12 Printing in color exercize

        install and use chalk from npm

    13 Global npm modules and nodemon

        npm i nodemon -g
        in the file directory run nodemon 'file.name'  instead of node

    16 Argument parsing with yargs

        npm i yargs

    19 Adding a note

    22 Refactoring arrow functions

        // to test if everything is working refactored
        in notes-app dir:
        node app.js remove --title="List" : to remove the note
        // running the same command again : shows what happens when ther is no note to edit
        node app.js add --title="t" --body="b" : to add a note

    30 Callstack Callback queue, event loop

    31 Making http request ( sign up for weather stack)

        weather api
        API access key : fcbecc958bca8e867c813ba8ff9825de

    33 An HTTP Request Challange

        Sign up at free at mapbox.com for an access token:
            pk.eyJ1IjoiZ3JhbWtyYWNrZXIiLCJhIjoiY2tvbTUzZXhqMGFuYTJ2bDZkMnozeHo1NCJ9.pvL5mbZl8DZuAjtBZR3tUA


        password: password
        username: my email

    34

    35 The callback function : 4-callbacks.js

        a function we provide as the argument to another function

        challange: links.mead.io/callback

    36. Callback Abstraction

        in weather app make utils directory
            in it touch geocode.js

    37. Callback abstraction challange

        in utils touch forcast.js

        weatherstack base url with key and long lat: 
            'https://api.weatherstack.com/current?access_key=fcbecc958bca8e867c813ba8ff9825de&query=' + latitude + ',' + longitude + '&units=f'

    38. Callback Chaining

    39. ES6 Aside: Object Property Shorthand and Destructurir

            in playground touch 5-es6-objcts.js

    40. Destructuring and Property Shorthand Challenge

            goal: use both destructuring and property shorthand in weather app

            1. Use destructuring in app.js, forcast.js, and geocode.js
            2. Use Property shorthand in forcast.js and geocode.js
            3. Test your wprk and ensure app still work

    41. Bonus: HttP Requests Without a Library

        navigate to node.js docs to the version api
            in the table of contents we are going to look at http and https

42 Section Intro: Web servers

    43. Hello Express!

        i can use express to serve files
        i can also use it to make web apis

        make web-server dir
            in npm init -y
            npm i express@4.16.4
        
        in web-server dir make sub dir called src
            in it touch app.js
        
        challange: goal : seup two new routes

        1. setup am about route and render a page title
        2. Setup a weather route and rnder a page title
        3. test your work by visiting both in the browser

    44. Serving up html and JSON

        res.send() will render html

        res.send() will also render objects or arrays of objects

    45. Serving up Static Assets

        mkdir public
        in public dir add index.html

        console.log(__dirname) // path to the directory, C:\Users\gramk\OneDrive\Desktop\Node-course\web-server\src
        
        console.log(__filename) // path to the file, C:\Users\gramk\OneDrive\Desktop\Node-course\web-server\src\app.js

        require path core node module

        CHALLANGE: create two more HTML files

        1. create a html page for about with 'About' title
        2.create a html page for help with 'Help' title
        3. Remove the old route handlers for both
        4. Visit both in the browser to test

        http://localhost:3000/about.html
        http://localhost:3000/help.html

    46. Serving up CSS, JS, Images, and More

        for orginization add css subdir within public dir
                in it touch styles.css

        in public make js subdir
            in it touch app.js

    47. Dynamic Pages with Templating

        npm i hbs@4.0.1
            in app.js:
                app.set('view engine', 'hbs')

        make views directory in project folder
            in it make a handlebars file:
                index.hbs
                    setup route
                about.hbs
                    setup route

            challange: Create a template for help page
                1. Setup a help template to render a halp message to the screen
                2. Setup  the help route and render the template with an example message
                3. Visit the route in the browser and see your help message print

                    passed with flying colors

    48. Customizing the Views Directory

            rename views dir to templates
            in the main app.js:
                const viewsPath = path.join(__dirname, '../templates')

                app.set('views', viewsPath)


    49. Advanced Templating

            in templates dir make views and partials dirs

            in views place the hbs files

            in app.js change the path variable to:
                const viewsPath = path.join(__dirname, '../templates/views')

            make partials path variable:
                const partialsPath = path.join(__dirname, '../templates/partials)
            then we configure:
                hbs.registerPartials(partialsPath)

            in partials touch header.hbs

            to render partial  {{>header}}
            nodemon src/app.js -e

        challange create a partial for the footer

        1. Setup the template for the footer partial 'Created by some Name'
        2 Register the partial at the bottom of all therr pages
        3. Test your work by visiting all three papers

    50. 404 Pages

        setup another route handler using app.get

        CHALLANGE : create and render a 404 page with handlebars

        1. setup the template to render the header and footer
        2. setup the template to render an error message in a paragrapg
        3. Render the template for both 404 routes
            - page not found
            - help article
        4. Test your work. bisit /what and /help/units

        in views touch 404.hbs

    51. Styling the Application: Part 1

    52. Styling Application Part 2

sec 8 Accessing API from Browser(Weather App)
    explored express learning how we can serve json and html,  express to serve contents of entire directorys and work with templating engines.

    54. The Query String

        CHALLANGE: update weather endpoint to accept address

        1. No address? Send back an error message
        2. Address? Send back the static JSON
        3. - Add address property onto JSON which returns the provided address
        4. Test /weather and /weather?addresses=philadelphia

    55. Building a JSON HTTP Endpoint

        copy utils file from weather-app and paste it in web-server source dir

        npm i request@2.88.0

        CHALLANGE: wire up / weather

        1. Require geocode/forcast into app.js
        2. Use the address to geocode
        3. Use the coordinates to get forcast
        4. Send back the real forcast and location

    56. ES6 Aside: Default Function Parameters

          in playground touch 7-default-params.js

    57. Browser HTTP Request with Fetch

        CHALLANGE: Fetch weather!

        1. Setup a call to fetch to fetch weather for Boston
        2. Get the parse JSON response
         - If error property, print error
         - If no error property, print location and forcast
        3. Refresh the browser and test
    
    58. Creating a search form

        CHALLANGE: Use input value to get weather

        1. Migrate fetch call into the submit callback
        2. Use the search text as the address query string value
        3. Submit the form with a valid and invalid value to test

    59. Wire up the user interface    

    CHALLANGE: Render contern to paragraph

    1. Select the second message p from Javascript
    2. Just before fetch, render loading message and empty p
    3. If error, render error
    4. If no error, render location and forecast
    5. Test Work! Search for errors and for valid locations

sec 9 Application Deployment (Weather App)

    61.. Joining Heroku and GitHub

        install heroku for windows 64

        in the top level of the node course run to see if downloadded after restarting terminal:
            heroku -v

        then to log in :
            heroku login
                press any key
                    login

        ****** right now im setup as gramkracker88@gmail which may be a problem later because its not the github account that im using for this class.

    62. Version Control with Git

        to see if it is installed:
            git --version

    63. Exploring Git

        basic git theory

    64. Integrating Git

        in root directory make file:
            .gitignore
                in it write:
            node_modules/

        add all files:
            git add .

    65. Setting up SSH Keys

        show files in directory including -a hidden ones, -l easy to read
            ls -a -l ~/.ssh

        run this command to see if im up and running:
             eval $(ssh-agent -s)
        result should look something like:  
             eAgent pid 840

        then:
            ssh-add ~/.ssh/id_rsa
                then: fill in passphrase

    66. Pushing Code to GitHub

    67. Deploying Node.js to Heroku

            finds our ssh keys:
                heroku keys:add
                    press y to upload

            create application from the root of our project:
                heroku create 'project name' , or if empty random one specified
            we get 2 things from this   
                an address where the app is hosted
                and an address where to put the github

            tell heroku which file to run in package.json scripts:
                "start": "node src/app.js"

            at the top of app.js:
                const port = process.env.PORT || 3000


            use variabl port at the bottom of app.js in place of 3000

            in other app.js remove 'localhost:3000' part from fetch

            git status
            add all with git:
                git add .
            then commit with message:
                git commit -m
            see that heroku remote was added:
                git remote  

            build the app:
                git push heroku main

            the result is the address where the app is hosted:
                 https://granville-weather-app.herokuapp.com/

            PS. I ended up making a new folder outside of this pre existing repo to avoid confusion

    68. New Feature Deplayment Workflow

        nodemon src/app.js -e js,hbs

        make changes, add and commit changes 

        git push heroku main.

        ( again takes place in a seporate file cause git was already set up in this one)

        CHALLANGE: add new data to forcast

        1. update the forecast string to include new data
        2. commit your changes
        3.Push your changes to GitHub and deploy to heroku
        4.Test!!! using live application

        I make the changes

        i add and commit changes

        then I push to heroku:
            git commit heroku main

    69. Avoiding Global Modules

        add to scripts object in package.json file:
            "dev": "nodemon src/app.js -e js,hbs"

        now i can start up the file with nodemon like this:
                npm run dev

        uninstalling global nodemon:
            npm uninstall -g nodemon

        install it as a dev(local) dependancy instead:
            npm install nodemon@1.2.0 --save-dev
 
        now nodemon command in the terminal wont work because its not installed globally anymore, but package.json scripts can use commands from locally installed modules

sec 10 MongoDB and Promises(Task App)

    71. MongoDB and NoSQL Databases

        mongodb is no sql, it uses collections instead of tables

    72. Installing MongoDB on MacOs and Linux

    73. Installing mongo db on Windows

        already installed from another course. lets hope that works

    74. Installing Database GUI Viewer

        google search:
            robo 3t option
        on the cite we download the Robo 

        when making a cannection i have to open the mongo window first

        then test and make connection

        right click on Local MongoDB Database and select open shell. in it write the commmand:
            db.version()
                in the upper left hand side press play btn to see results

    75. Connecting and Inserting Documents

        mongoDB.com > docs > MongoDB drivers > Node > api documentation

        to find the mongodb node driver search npm for mongodb

        in Node-course mkdir task-manager

        cd task-manager
            npm init -y
            npm i mongodb@3.1.10
            touch mongodb.js

        to run after files configured:

            node mongodb.js

        in Root 3T :
            clear tabs
            right click on Local MongooseDB Database to refresh to see the new db we created

    76. Inserting Documents

        CHALLANGE: insert 3 tasks into a new task collection

        1. use insertMany to insert three documents
            -description (string), completed (boolean)
        2.Setup the callback to handle error or print ops
        3. Run the script
        4. Refresh the database in Robo 3t and view data in tasks collection



    

            





     
    