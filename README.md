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

sec 8 Accessing API from Browser(Weather App) explored express learning how we can serve json and html, express to serve contents of entire directorys and work with templating engines.

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

            set up owner field on task model
                in it setup type, required, and ref

            setup virtual attribute on user schema that refrences Task like so:

                userSchema.virtual('tasks', {
                    ref: 'Task',
                    localField: '_id',
                    foreignField: 'owner'
                })

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

125.  Validation Challange

             CHALLANGE: add validation to avatar upload route

             1. limit the upload size to 1 mb
             2. only allow jpg, jpeg, png
             3. Test uour work!
                 - upload larger files (should fail)
                 - upload non-images (should fail)

126.  Handling Express Errors

             CHALLANGE: clean up error handling
             1. setup an error handler function
             2. Send back a 400 with the error message
             3. Test your work

127.  Adding Images to User Profile

             add auth to post /users/me/avatar

             in user models add avatar field with a type of buffer

             remove dest from multer upload object

             add logic to the /users/me/avatar:
             req.user.avatar = req.file.buffer
             await req.user.save()

             make post an async function

             CHALLANGE: setup route to delete avatar

             1. setup DELETE /users/me/avatar
             2. Add authentication
             3. Set the field to undefined and save the user sending back a 200
             4. test work by creating a new request for Task App in Postman.

128.  Serving up files

             setup get /users/:id/avatar route

             to test use the user id
             http://localhost:3000/users/60f73060faac880e2c785ca5/avatar

129.  Auto-Cropping and Image Formatting

             module for formatting and resizing images:
             npm i sharp@0.21.1
             version dosent download

             require sharp in user router

sec 15: Sending Emails (task app)

131.  Exploring SendGrid

            setup an accoutn:
            sendgrid.com

            choose option to integtate api

            follow process layed out

            create name for api key : Task-Manager-App:



             in src create a new folder called emails
             inside it touch account.js
             in it setup api key variable

             setup the email information

            install sendgrid through npm:
                npm i @sendgrid/mail@6.3.1
                require in account.js

                run the file to see if it works
                node src/emails/account.js

132.  Sending Welcome and Cancelation Emails

            CHALLANGE:

            1. Setup a new function for sending an email on cancelation
                -email and name as args
            2. Include their name in the email and ask why they canceled
            3. Call it just after the account is removed
            4. Run the request and check your inbox!

133.  Environment Variables

            install env extension:
                "env-cmd": "^8.0.2"

            place privat keys in and link to them with process.env

            update scripts in pacage.json:
                    "dev": "env-cmd ./config/dev.env nodemon src/index.js"

134.  Creating a production MongoDB Database.

            im working on a mongodb atlas cluster thats already been created

            **** i may need to whitelist the ip address by setting it to:
                0.0.0.0/0

            click connect on the cluster > connect with mongodb

            ***** may need to delete the extra ip address

            ??? not sure if this section is working , when i connected to compass it showed me info for my Yelp-Camp app not my task-manager

135.  Heroku Deployment

            delete playground in the task-manager directory

            initalize as git repo:
                cd ..  task-manager
                git init
            ????  above may be an issue because its already in a git repo. ****** it wasent

            make sure git is not tracking config and node_modules with .gitignore file

            add and make the first commit:
                git add .
                git commit -m 'Initial Commit'

            create a new private repo for folder on github called task-manager-api

            setup romote with commands provided on github

            create heroku app and heroku remote
                heroku create granville-task-manager

            setup environment variables for heroku using heroku config:
                heroku config:set key=value

            check the values we have configured:
                heroku config

            remobe variable from config:
                heroku config:unset <key>

            navigate to mongodb atlas cluster and select connect again
                this time select 'connect your application'

            ******* I dont have a short SRV connection , Im trying the standard instead

            add the mongodb variable for heroku in single quotes

            port is maintained and managed by heroku itself, It is not needed in heroku config

            push to heroku:
                git push heroku master

            copy the url and test in postman

            in the task-manager-api production environment place heroku url with a label of url:
                https://granville-task-manager.herokuapp.com

136.  Section Intro: Testing Node.js

            Instead of manually testing our app manually we can automate that process

137.  Jest Testing Framework

            Why test?
            -saves time
            -creates reliable software
            -gives flexibility to developers
                -refactoring
                -collaborating
                -profiling
            -peace of mind

            jestjs.io
            install as dev dependancy:
                npm i jest@23.6.0 --save-dev

            setup a new script in package.json:
                "test": "jest"

            make test file in root dir
            in it touch math.test.js

138.  Writing Tests and Assertions

            in scr touch math.js file
            there are all kinds of asertions in we can use in the docs

139.  Writing Your Own Tests

140.  Testing Asynchronous Code

            add command line arg to test script in package.json to watch for changes:
                --watch

            after running npm test press w to see usage options.

141.  Testing an Express Application: Part 1

            in config touch test.env:
                copy from dev.env but change Mongodb value to local host and and add -test to the database name

            update the test script in package.json
                "test": "env.cmd ./config/test.env jest --watch"
            we can add a jest root property under scripts to store our jest config:
                "jest": {
                    "testEnvironment": "node"
                },

142.  Testing an Express Application: Part II

            npm i supertest@3.4.1 --save-dev

            in test dir touch user.test.js

            in source touch app.js

143.  Jest Setup and Teardown

            in the jest documemtation under 'Setup and Teardown' is the information for this topic.

            CHALLANGE: Test login failior

            1. Create 'should not login nonexistant user
            2.
            send off the request with bad credentials
            3. Expect the correct status response
            4. test work!

            SOLUTION:
            test('Should not login nonexistant user', async () => {
                await request(app)
                    .post('/users/login')
                    .send({
                        email: 'bob',
                        password: 'bob@gmail.com',
                    })
                    .expect(400)
            })

144.  Testing with Authentication

            CHALLANGE: Test delete account
            1. Create "Should Delete account for user:
                -Setup auth header and expect correct status code
            2. Create "Should not delete account for unauthenticated user"
                - Expect correct status code
            3. Test!!!!

            SOLUTIONS:

            test('should delete account for user', async () => {
                await request(app)
                    .delete('/users/me')
                    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
                    .send(userOne)
                    .expect(200)
            })

            test('should not delete account for unauthenticated user', async () => {
                    await request(app).delete('/users/me').expect(401)
            })

145.  Advanced Assertions

                  CHALLANGE: Validate new token is saved

                  1. Fetch the user from the database
                  2. Assert that token response matches user second token
                  3. Test your work!

                  SOLUTION:

                    Change :

                        test('Should login existing user', async () => {
                            await request(app)
                                .post('/users/login')
                                .send({
                                    email: userOne.email,
                                    password: userOne.password,
                                })
                                .expect(200)
                        })

                    To:

                        test('Should login existing user', async () => {
                            const response = await request(app)
                                .post('/users/login')
                                .send({
                                    email: userOne.email,
                                    password: userOne.password,
                                })
                                .expect(200)

                            const user = await User.findById(userOneId)
                            expect(response.body.token).toBe(user.tokens[1].token)
                        })

                    CHALLANGE: Validate user is removed

                    1. Fetch the user from the database
                    2. Assert null response (use assertion from signup test)
                    3. Test your work!

                    SOLUTION:

                        Change:

                            test('should delete account for user', async () => {
                                await request(app)
                                    .delete('/users/me')
                                    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
                                    .send(userOne)
                                    .expect(200)
                            })

                        To:
                            test('should delete account for user', async () => {
                                await request(app)
                                    .delete('/users/me')
                                    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
                                    .send(userOne)
                                    .expect(200)
                                const user = await User.findById(userOneId)
                                expect(user).toBeNull()
                            })

146.  Mocking Libraries

                setup directory for __mocks__ in tests dir"
                    mkdir __mocks__
                inside that mkdir @sendgrid
                inside that touch mail.js

147.  Wrapping up User Tests

                  CHALLANGE: Test user updates
                  1. Create "Should update valid user fields"
                      - Update the name of the test user
                      - Check the data to confirm it's changed
                  2. Create 'Should not update invalid user fields"
                      - Update a "location" field and expect error status code
                  3. Test your work!

                  SOLUTION:1

                      test('Should update valid user fields', async () => {
                        await request(app)
                            .patch('/users/me')
                            .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
                            .send({
                                name: 'Jess',
                            })
                            .expect(200)
                        const user = await User.findById(userOneId)
                        expect(user.name).toEqual('Jess')
                    })

                  SOLUTION:2

148.  Setup Task Test Suite

            In tests dir touch task.test.js

            in fixtures touch db.js

149.  Testing with task data

            CHALLANGE: Test GET /task
            1. Request all tasks for user one
            2. Assert the correct status code
            3. Check the length of the response array is 2
            4. Test work!

            SOLUTION:
                test('should fetch user task', async () => {
                    const response = await request(app)
                        .get('/tasks')
                        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
                        .send()
                        .expect(200)
                    expect(response.body.length).toEqual(2)
                })

            CHALLANGE: Test delete task security
            1. Attempt to have the second user delete the first task (should fail)
                - Setup nessessary exports from db.js
            2. Assert the failed status code
            3. Assert the task is still in the database
            4. Test work!

            SOLUTIIN:
                test('Should not delete other users tasks', async () => {
                    const response = await request(app)
                        .delete(`/tasks/${taskOne._id}`)
                        .set('Authorization', `Bearer ${userTwo.tokens[0].token}`)
                        .send()
                        .expect(404)
                    const task = await Task.findById(taskOne._id)
                    expect(task).not.toBeNull()
                })

150.  Bonus Extra Test Ideas

            list of additional tests I can take
            //
            // User Test Ideas
            //
            // Should not signup user with invalid name/email/password
            // Should not update user if unauthenticated
            // Should not update user with invalid name/email/password
            // Should not delete user if unauthenticated

            //
            // Task Test Ideas
            //
            // Should not create task with invalid description/completed
            // Should not update task with invalid description/completed
            // Should delete user task
            // Should not delete task if unauthenticated
            // Should not update other users task
            // Should fetch user task by id
            // Should not fetch user task by id if unauthenticated
            // Should not fetch other users task by id
            // Should fetch only completed tasks
            // Should fetch only incomplete tasks
            // Should sort tasks by description/completed/createdAt/updatedAt
            // Should fetch page of tasks

section 17: 151. Section Intro: Realtime Web Applications with Socket.io

152.  Creating the Chat App Project

             mkdir chat-app
                 in it mkdir src
                    in it touch index.js

            CHALLANGE: create an express web server
            1. Initalize npm and install express
            2. Setup a new Express server
                - Serve up the public directory
                - Listen on port 3000
            3. Create index.html and render 'Chat App' to the screen
            4. Test your work! Start the server and view the page in the browser

            SOLUTION:
                const express = require('express')
                    const app = express()
                    const port = process.env.PORT || 3000

                    // something todo with
                    const path = require('path')
                    const publicDirectoryPath = path.join(__dirname, '../public')
                    app.use(express.static(publicDirectoryPath))

                    app.get('/', (req, res) => {
                        res.send('chat app')
                    })

                    app.listen(port, () => {
                        console.log(`Server is up on port ${port}`)
                    })

                    // mkdir public
                        in it touch index.html

            CHALLANGE: Setup scripts in package.json

            1. Create a 'start' script to start the app using node
            2. Install nodemon and a development dependency
            3. Create a "dev" script to start the app using nodemon
            4. Run both scripts to test work!

            SOLUTION:
                npm i nodemon --save-dev
                "start": "node src/index.js",
              "dev": "nodemon src/index.js"

153.  WebSockets

            -webSockets allow for full-duplex communication(2 way)
            -webSocket is a seperate protocol form HTTP
            -Presistent connection between client and server

154.  Getting Started with Socket.io

            npm i socket.io@2.2.0

            make script in index.html:
                <script src="/socket.io/socket.io.js"></script>

            in public dir mkdir js
                in it touch chat.js

            add another script to index.html:
              <script src="/js/chat.js"></script>

155.  Socket.io Events

156.  Socket.io Events Challange

            CHALLANGE: send a welcome message to new users
            1. Have server emit "message" when new client connects
                - Send "welcome!" as the event data
            2. Have client listen for "message" event and print to console
            3. Test your work!

            CHALLANGE: Allow clients to send messages

            1. Create a form with an input and button
                -Similar to the weather form
            2. Setup event listener for form submissions
                -Emit "sendMessage" with input string as message data
            3. Have server listen for "sendMessage"
                -Send message to all connected clients
            4. Test your work!

157.  Brodcasting Events

            server (emit) -> client (recieve) --acknoledgement--> server

            client (emit) -> server (recieve) --acknowledgement--> client

158.  Sharing Your Location

            CHALLANGE: Share coordinates with other users

            1. Have client emit 'sendLocation' with an object as the data
                -Object should contain latitude and longitude properties
            2. Server should listen for " sendLocation"
                -When fired, send a "message" to all connected clients "Location: long, lat'
            3. Test your work!

            SOLUTION:
                    // in chat.js
                navigator.geolocation.getCurrentPosition((position) => {
                    // sending location from client to server
                    socket.emit('sendLocation', {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    })
                })

                    // in index.js in the socket connection logic
                    // recieve event on server
                socket.on('sendLocation', (coords) => {
                        io.emit('message', `Location: ${coords.latitude}, ${coords.longitude}`)
                    })

159.  Event Acknoledgments

            npm module for detecting bad words
                npm i bad-words@3.0.0
                    require in index :
                        const Filter = require('bad-words')

            CHALLANGE: Setup acknoledgement

            1. Setup the client acknowledgment function
            2. Setup the server to send back the acknoledegment
            3. Have the client print "location shared!" when acknowledged
            4. Test work!

160.  Form and Button States

            CHALLANGE: Disable the send location butto while location is being sent

            1. Set up a selector at the top of the file
            2. Disable the button just before getting the current position
            3. Enable the button in the acknowledgment callback
            4. Test work!

161.  Rendering Messages

162.  Rendering Location Messages

            CHALLANGE: Create a seperate event for location sharing messages

            1. Have server emit 'locationMessages' with the URL
            2. Have the client listen for "locationMessage" and print the URL to the console
            3. Test your work by sharing a location!

            CHALLANGE: Render new template for location messages

            1. Duplicate the message template
                - Change the id to something else
            2. Add a link inside the paragraph with the link text "my current location"
                - URL for link should be the maps URL (dynamic)
            3. Select the template form Javascript
            4. Render the template with the URL and append to messages list
            5. test your work

163.  Working with Time

            ways to get date:

                if
                    const now = new Date()
                then

                get date string
                    now :
                         Mon Aug 09 2021 13:31:19 GMT-0700 (Pacific Daylight Time) {}
                    now.toString() :
                         "Mon Aug 09 2021 13:31:19 GMT-0700 (Pacific Daylight Time)"

                get the day of the montg
                    now.getDate() :
                        9

                get the time in miliseconds
                    now.getTime():
                        1628541079436

                in source mkdir utils
                    in it touch messages.js


            javascript dosent give us easy ways to format our timestamp when we recieve data

            momentjs.com:
                		<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js"></script>

164.  Timestamps for Location Messages

            CHALLANGE: Add timestamps for location messages

            1. Create generateLocationMessage and exprort
                - {url: '', createdAt: 0}
            2. Use generateLocationMessage when server emits location message
            3. Update template to render time before the url
            4. Compile the template with the URL

165.  Styling the chat app

166.  Join Page

            in public touch chat.html

            copy contents of index.html to chat.html

            clear body of index.html and make a form with th action /chat.html

167.  Socket.io Rooms

            this lesson uses the query string we imported in our scripts in chat.html

            types of emits so far:
                socket.emit, io.emit socket.broadcast.emit

            now to send a message to everyone in a room:
                io.to.emit

            sending to everyone except a specific client
                socket.broadcast.to.emit

168.  Storing Users: Part 1

            in utils touch users.js file

169.  Storing Users: Part II

            CHALLANGE: Create two new functions for users

            1. Create getUser
                - Accepting id and return user object (or undefined)
            2. Create getUsersInRoom
                - Accept room and return array of users (or array)
            3. Test your work by calling the functions!

170.  Tracking Users joining and leaving

171.  Sending Messages to Rooms

            CHALLANGE: Send messages to correct room

            1. Use getUser inside "sendMessage" event handler to get user data
            2. Emit the message to their current room
            3. Test your work!
            4. Report for " sendLocation "

            CHALLANGE: Render username for text messages

            1.Setup the server to send username to client
            2. Edit every call to "generateMessage" to include username
                - Use "Admin" for sys messages like connect/welcome/disconnect
            3. Update client to render username in template
            4. test your work!

172.  Rendering User List

173.  Automatic scrolling

             *** seems to be working but the second user stops autoscrolling after about 6 or 7 messages

174.  Deploying the Chat Application

            CHALLANGE: Deploy the chat application

            1. Setup Git and commit files
                - Ignore node_modules folder
            2. Setup a Github repository and push code up
            3. Setup a Heroku app and push code up
            4. Open the live app and test your work


            SOLUTION:

                cd chat-app
                git init
                place node_modules files in .gitignore
                git add .
                git commit -m "initial commit"
                create repo in github
                follow instructions for setting up remote repository
                push to it
                heroku create granville-chat-app:
                    https://granville-chat-app.herokuapp.com/
                git push heroku main:
                    hopefully results in success after 30 seconds or so

## Accomplishments

Weather API

    https://granville-weather-app.herokuapp.com/

Task Manager API

    https://granville-task-manager.herokuapp.com

Chat App

    https://granville-chat-app.herokuapp.com/
