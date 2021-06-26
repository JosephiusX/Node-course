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