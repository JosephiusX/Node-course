const jwt = require('jsonwebtoken') // require and name jasonWebToken
const User = require('../models/user') // requir and name user model

const auth = async (req,res,next) => { // async req, res function
   try {
        const token = req.header('Authorization').replace('Bearer ', '') // in request header, on te value with the key Authorization , replace 'Bearer ' with nothing , leaving us with just the token
        const decoded = jwt.verify(token, 'thisismynewcourse') // take the token and verify it using the key
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token }) // ??

        if (!user) { // if user is false
            throw new Error() // error
        } // otherwis

        req.user = user
        next() // next to continue to the route
   } catch (e) {// if if rejected
       res.status(401).send({ error: 'Please authenticate.'})
   }
}

module.exports = auth // export to be required in in user route file