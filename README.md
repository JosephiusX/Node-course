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

    77. The ObjectID

    78. Querying Documents

        CHALLANGE: use find and findone with tasks

        1. use findone to fetch the last task by its id (print doc to console)
        2. Use find to fetch all tasks that are not completed ( print docs to console)
        3. Test !!!!

    79. Promises

        in playground dir touch 8-promises.js

        promises are either pending fufilled or rejected

    80. Updating Documents

            google search:
                mongodb update operators

            we can use $inc to incriment a value

            CHALLANGE: Use updateMany to complete all tasks

            1. Check the documentation for updateMany
            2. Setup the call with the query and the updates
            3. use promise methods to setup the success/error handlers
            4. Test your work!

        my solution
            db.collection('documents').updateMany({
                    completed: false
                }, { 
                    $set:{ 
                        completed: true
                    }
                }).then((result) => {
                    console.log(result)
                }).catch((error) => {
                    console.log(error)
                })

    81. Deleting Documents

        CHALLANGE:  use deleteOne to remove a task

        1. Grab the description for the task you want to remove
        2. Setup the call with the query
        3. Use promise methods to setup the success/error handlers
        4. Test your work!

        SOOUTION :
            const db = client.db(databaseName) // get connection for specific database

            db.collection('users').deleteOne({
                name: 'Vicram'
            }).then((result) => {
                console.log(result)
            }).catch((error) => {
                console.log(error)
            })
    
sec 11: REST API's and mongoose

    83. Setting up Mongoose

        npm i mongoose@5.3.16
        mkdir src
        in src mkdir db
        in db touch mongoose.js

    84. Creating a Mongoose Model

        CHALLANGE: create a model for tasks

        1. Define the model with description and complete fields
        2. Create a new instance of th model
        3. Save the model to the database
        4. Test your work!

        my SOLUTION:

        const task = mongoose.model('task', {
            task: {
                type: String
            },
            completed: {
                type: Boolean
            }
        })

        const chore = new task({
            task: 'take out the trash',
            completed: false
        })

        chore.save().then(() =>{
            console.log(chore)
        }).catch((error) => { 
            console.log('Error!', error)
        })
    
    85. Data Validation and Sanitization: Part 1 

        validator is a library on npm that has tools for validating diffrent things

        npm i validator@10.9.0
            require

    86. Data Validation amd sanitization: Part 2

        CHALLANGE: Add a password field to User

        1. Setup the field as a required string
        2. Ensure the length is greater than 6
        3. Trim the password
        4. Ensure that password dosen't contain "password"
        5. Test your work!

        in the user mongoose model:
         password: {
                type: String,
                required: true,
                trim: true,
                minlength: 7,
                validate(value){
                    if(value.includes('password')) {
                        throw new Error('password cannot contain "password"')
                    }
                }
            },

        CHALLANGE: add a password field to User

        1. Trim the description and make it required
        2. Make completed optional and default it to false
        3. Test your work with and without errors

        SOLUTION: 
        const task = mongoose.model('task', {
                task: {
                    type: String,
                    required: true,
                    trim: true
                },
                completed: {
                    type: Boolean,
                    default: false
                }
            })

    87. Structuring a REST API

        THE REST API - Represitional State Transfer - Application Programming Interface (REST API or RESTFUL API)

        AKA - tools that allow us to build software applications

        create: POST/tasks
        Read: GET/tasks
        Read: GET/tasks/:id
        Update: PATCH/tasks/:id
        Delete: DELETE /tasks/:id

    88. Installing Postman

    89. Resource Creation Endpoints pt 1

        install nodemon as dev dependancy:
            npm i nodemon@1.18.9 --save-dev ** didnt work instead i just installed the latest version

        install express
            npm i express@4.16.4

        inside src touch index.js

        install nodemon as dev dependancy for use in scripts:
            npm i nodemon --save-dev

        Set up npm scripts for development:
            "scripts": {
                "start": "node src/index.js",
                "dev": "nodemon src/index.js"
            },

        setup users route and send 'testing' :
            app.post('/users', (req, res) => {
                res.send('testing')
            })

        we can test this with postman by sending a post request to localhost3000/users
            result:
                testing

        to send data in postman under body click raw and in the dropdown menue select JSON

        insert this object:
            {
                "name": "joseph Granville",
                "email" : "gramkracker88@gmail.com",
                "password": "1234567"
            }

            now when the post is sent with this object in the body it can be accessed in express app with req.body

        in src mkdir models
            in models touch user.js

        for the testing with postman i have to make sure mongodb is open

    90. Resource Creation Endpoints: Part 2

        CHALLANGE: setup the task creation endpoint

        1. Create a seperate file for the task model (load it into index.js)
        2.Create the tasl creation endpoint (handl success and error)
        3.Test the endpoint from postman with good and bad data

        SOLUTION:
            place the task schema in its own task.js file in models directory and export it

            in index.js, require models/task

            build out server logic:
                app.post('/task', (req, res) => {
                    const study = new Task(req.body)

                    study.save().then(() => { 
                        res.send(task)
                    }).catch((e) => { 
                        res.status(400).send(e)
                    })
                })

            check by sending a post request on postman with a task as the body

    91. Resource reading pt 1

        we look for the mongodb natiive driver in the docs

    92. Resource reading pt 2

        CHALLANGE: Setup the task reading endpoints

        1. Create an endpoint for fetching all tasks
        2. Create an endpoint for fetching a task by its id
        3. Setup new requests in Postman and test your work
        
        RESULTS:

            app.get('/task', (req, res) => {
                    Task.find({}).then((task) => {
                        res.send(task)
                    }).catch((e) => {
                        res.status(500).send()
                    })
                })

            app.get('/task/:id', (req, res) => {
                const _id = req.params.id

                Task.findById(_id).then((task) => {
                    if (!task) {
                        return res.status(404).send()
                    }

                    res.send(task)
                }).catch((e) => {
                    res.status(500).send()
                })
                
            })

    93. Promise Chaining
        
        in task manager make a playground folder
            in it touch promise-chaining.js

        cd into task manager

    94. Promise Chaining Challenge

        CHALLANGE: Mess around with promise chaining

        1. create promise-chaining-2.js
        2. Load in mongoose and task model
        3. Remove a given task by id
        4. Get and print the total number of incomplete tasks
        5. Test your work!

        SOLUTION : 
            require('../src/db/mongoose')
            const Task = require('../src/models/task')

            Task.findByIdAndDelete('60dcc0d83f9d131174d42b7d', {task: 'get a life' }).then((task) => { // selecting the task by id and and changing the value of task, then
                console.log(task)
                return Task.countDocuments({ completed: false }) // count 
            }).then((result) => {
                console.log(result)
            }).catch((e) => {
                console.log(e)
            })

    95. Async/Await

    96. Async/Await pt 2

        CHALLANGE: Use async/await

        1. create deleteTaskAndCount as an async function
        2. use await to delete task and count up incomplete tasks
        3. Return the count
        4. Call the function and attach then/catch to log results
        5. Test work

        SOLUTION:

            const deleteTaskAndCount = async (id) => {
                const task = await Task.findByIdAndDelete(id)
                const count = await Task.countDocuments({ 'completed': false })
                return count
            }

            deleteTaskAndCount('60dd1f42040002646471d9f8', 2).then((count) => {
                console.log(count)
            }).catch((e) => {
                console.log(e)
            })

    97. Integrating Async/Await

        
        CHALLANGE: Refactor task routes to use async/await

        1. Refactor
        2. test routs with postman

    98. Resource Updating Endpoints: Part 1

        nongoose docs > quickstart > Queries:

            Model.findByIdAndUpdate()

    99. Resource Updating Endpoints: Part 2

        CHALLANGE: Allow for task updates

        1. Setup the route handler
        2. Send error if unknown updates
        3. Attempt to update the task
            - Handle task not found
            - Handle validation errors
            - Handle success
        4. Test your work!

        SOLUTION:

        app.patch('/tasks/:id', async(req, res) => {
            const updates = Object.keys(req.body)
            const allowedUpdates = ['task', 'completed']
            const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

            if(!isValidOperation) { 
                return res.status(400).send({error: 'Invalid updates!'}) 
            }

            try{
                const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true})
                if (!task) { 
                    return res.status(404).send() 
                }
                res.send(task)
            } catch (e) {
                res.status(400).send(e)
            }
        })

        app.listen(port, () => {
            console.log(`Server is up on port ${port}`)
        })

    100. Resource Dleting Endpoints

    101. Seperate Route Files

        in src dir make ruoters dir
            in it touch user.js

        CHALLANGE: Create task router

        1. Create new file that creates/exports new router
        2.Move all task routes over
        3. Load in and use that router with express app
        4. test work

        SOLUTION:
            in src/routers make task.js file

            give it its connection logic:
                nst Task = require('../models/task') // requier task schema
                const router = new express.Router()

Section 12 API Authentication and security(Task App)

    103. Securely Storing Passwords: Part 1

        hashing tool for passwords

            n pm i bcryptjs@2.4.3

    104. Securely Storing Passwords: Part 2

        CHALLANGE: Change how tasks are updated

        1. Find the task
        2. Alter the task properties
        3.Save the task
        4. Test your work by updating a task from postman. 

        SOLUTION:
        
        delete this line:
            const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true})

        add this line:
            const task = await Task.findById(req.params.id)

            updates.forEach((update) => task[update] = req.body[update]) 
            await task.save()

    105. Logging in Users
        
    106.JSON Web Tokens 

        json web tokens work basically like cookies
        npm i jsonwebtoken@8.4.0  
            require: const jwt = require('jsonwebtoken')

    107. Generating Authentication Tokens

        CHALLANGE: have signup send back auth token

        1. Generate a token for the saved user
        2. Send back both the token and the user
        3. Create a new user from Postman and confirm the token is there

        SOLUTION: 

        in my new users route:
            const token = await user.generateAuthToken()
            res.status(201).send({ user, token })


    108. Express Middleware

        Without middleware: new request -> run route handler

        with middleware: new request -> do something -> run route handler

        CHALLANGE : Setup middleware for maintenance mode

        1. Register a new middleware function
        2. Send back a maintenanc message with a 503 status code
        3. Try your requests from the server and confirm status/message shows

        SOLUTION: 

            app.use((req, res, next) => {
                if (req) {
                    res.send(' site is down for maintenance')
                } else {
                    next()
                }
            })

    109. Accepting Authentication  Tokens

        in source mkdir middleware

     **************************** dosent seem to be working and idk why
     the space after Bearer in the auth file was nessssary in this case

     110. Advanced Postman

        adding environments and environment variables

        copy and paste authentication token from the read profile header without the Bearer part 
        delete the header
        in authorization tab select type Bearer
        insert token save and it works like before when I send

        now change the type to: inherit auth from parent

        navigate to task app and click:  ... > edit

        under authorization tab select auth type of bearer token
        enter token in that slot. 

        now its available to all the routes

        in Login and Create user routes change authorization to no auth, they dont need authentication

        now we edit the collection again
        under the authorization tab we replace the token with: {{authToken}}

        set Read Users Auth type to Bearer
        along with any other route that needs authentication

    111 . Logging Out

        CHALLANGE : Create a way to logout all sessions

        1. Setup POST /users/logoutAll
        2. Create the routerhandler to wipe the tokens array -send 200 or 500
        3. Test your work
            -Login a few times and logout of all. Check databases

        SOLUTION : 

        router.post('/users/logoutAll', auth, async (req, res) => {
            try {
                req.user.tokens = []
                await req.user.save()
                res.send() 
            } catch (e) {
                res.status(500).send()
            }
        })

    112. Hiding Private Data

        add to user model file:

            userSchema.methods.toJSON = function () {
            const user = this
            const userObject = user.toObject()

            delete userObject.password
            delete userObject.tokens

            return userObject
        }

    113. Authenticating User endpoints

        CHALLANGE: Refactor the update profile route

        1. update the url to /users/me
        2. Add the  authentication middleware into the mix
        3. Use the existing user document instead of fetching via param id
        4. Test your work in Postman

        SOLITION :

                router.patch('/users/me', auth, async (req, res) => { 
                const updates = Object.keys(req.body)
                const allowedUpdates = ['name', 'email', 'password', 'age']
                const isValidOperation = updates.every((update) => allowedUpdates.includes(update)) array than returns true else returns false

                if(!isValidOperation) { // if it did not return true
                    return res.status(400).send({error: 'Invalid updates!'})
                }

                try { // if promise is ufilled

                    updates.forEach((update) => req.user[update] = req.body[update])
                    await req.user.save()
                    res.send(user) // send user
                } catch (e) { // if await is rejected
                    res.status(400).send(e) // send bad request error
                }
            })

    114. The User/Task Relationship

            flabberghasted

    115. Authenticating Task Endpoints

        CHALLANGE:  Refactor GET /tasks

        1. add authentication
        2. Return tasks only for the authenticated user
        3. Test your work!

        CHALLANGE 2  Refactor Delete /tasks/:id

        1. Add authentication
        2. Find the task by _id?owner (findOneAndDelete)
        3. Test your work!

    116. Cascade Delete Tasks

section 13: Sorting, Pagination, and Filtering (Task App)

    118. Working with Timestamps

        CHALLANGE: Refactor task model to add timestamps

        1. Explicitly create schema
        2. Setup timestamps
        3. Create tasks from Postman to test work

    119. Filtering Data

        at the end of the lesson testing the file
        
        created four tasks / create task works
        read tasks / read tasks works
        read only completed tasks :
            /tasks?completed=true
        
    120. Paginating Data

        in the task route in the req.user.populate object add :

         options: {
                limit: parseInt(req.query.limit)
            }

        now the number of comments that will show is equivilant to the limit query string:

        localhost:3000/tasks?limit=3 : only three tasks show

        CHALLANGE: Setup support for skip

        1. Setup 'skip' option
            -Parse query value to integer
        2. Fire off some requests to test it's working
            -Fetch the 1st pagge of 2 and then the 3rd page of 2
            -Fetch the 1st page of 3 and then the 2nd page of 3

            SOLUTION : skip: parseInt(req.query.skip)

            to test: tasks?limit=2&skip=4

    121. Sorting Data

            test work in postman:
                /tasks?sortBy=createdAt:desc
                /tasks?sortBy=createdAt:asc

Sec 14 File Uploads ( task app)

    123. Adding Support for File Uploads
    
        support for uploading files:
            npm i multer@1.4.1
            
        code for testing multer:
            const multer = require('multer')
            const upload = multer({
                dest: 'images'
            })
            app.post('/upload', upload.single('upload'), (req, res) => {
                res.send()
            })
            
        to test , make a post request to:
            localhost:3000/upload
                in the body select form-data and write upload as a key and set the type to file. 
                
                then in the value select the image we want to upload
                
                send request and check in image file. 
                
                to preview write the file extension .jpg so vscode knows what to do with it.
                
        CHALLANGE: setup endpoint for avatar upload
        
        1. Add POST /users/me/avatar to use router
        2. Setup multer to store uploads in an avatars directory
        3. Choose name "avatar" for the key when registering the middleware
        4. Semd back a 200 response form route handler
        5. Test work. Create new Task App request and upload image
        
    124. Validating File Uploads
    
        add limits to multer object and set the filezize by bytes to 1000000
        
        now when testing in post man i can upload phili image because its under the limit but not fall image which is over the filesize limit.
        
        we add file filter to multer upload object:
            fileFilter(req, file, cb) {
                if (!file.originalname.endsWith('.pdf')) { // runs if file is not pdf
                return cb(new Error('please upload a PDF'))
                }
                
                
                cb(undefined, true)
            }
            
        test by trying to upload a file thats not a pdf:
            should get an error.
            
        uploading a file that is a pdf should work fine
                    
        webcite for testing regular expressions:
            https://regex101.com
            
125. Validation Challange
    
        CHALLANGE:  add validation to avatar upload route
        
        1. limit the upload size to 1 mb
        2. only allow jpg, jpeg, png
        3. Test uour work!
            - upload larger files (should fail)
            - upload non-images (should fail)
            
126. Handling Express Errors
        
        CHALLANGE: clean up error handling
        
        1. setup an error handler function
        2. Send back a 400 with the error message
        3. Test your work
        
127. Adding Images to User Profile 
    
        add auth to post /users/me/avatar
        
        in user models add avatar field with a type of buffer         
        
        remove dest from multer upload object 
        
        add logic to the /users/me/avatar:
            req.user.avatar = req.file.buffer
            await req.user.save()
            
        make post an async function
        
        CHALLANGE: setuyp route to delete avatar
        
        1. setup DELETE /users/me/avatar
        2. Add authentication
        3. Set the field to undefined and save the user sending back a 200
        4. test work by creating a new request for Task App in Postman. 




    

            





     
    