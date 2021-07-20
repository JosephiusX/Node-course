const express = require("express");
const User = require("../models/user");
const auth = require("../middleware/auth");
const router = new express.Router();
const multer = require('multer') // upload npm lib
const sharp = require('sharp')

// Create user
router.post("/users", async (req, res) => {
  // adding async chabges behavior of function from returning a value to returning a promise
  const user = new User(req.body); // set user new requst body object
  try {
    // if promise is fufilled
    await user.save(); // awaiting a promise for user to save (waits for user to save before moving on )
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token }); // this code cant run unless the promise above it is fufilled.
  } catch (e) {
    // if the promise(await) above fails this runs
    res.status(400).send(e); // send bad request status
  }
});

router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password);
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send();
  }
});

router.post("/users/logout", auth, async (req, res) => {
  // logout route
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();

    res.send();
  } catch (e) {
    res.status(500).send();
  }
});

router.post("/users/logoutAll", auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send(); // sends 200 indicating things went well
  } catch (e) {
    res.status(500).send();
  }
});

router.get("/users/me", auth, async (req, res) => {
  // users get route
  res.send(req.user);
});

router.patch("/users/me", auth, async (req, res) => {
  // route for updating users by id
  const updates = Object.keys(req.body); // the object keys on request body  equivilant to updates
  const allowedUpdates = ["name", "email", "password", "age"];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update)); // if everything in updates array is one of the items in allowedUpdates array than returns true else returns false

  if (!isValidOperation) {
    // if it did not return true
    return res.status(400).send({ error: "Invalid updates!" }); // send error code along with message to let user know why it was rejected
  }

  try {
    // if promise is ufilled

    updates.forEach((update) => (req.user[update] = req.body[update])); // bracket notation in this case  makes it more dynamic
    await req.user.save();
    res.send(req.user); // send user
  } catch (e) {
    // if await is rejected
    res.status(400).send(e); // send bad request error
  }
});

router.delete("/users/me", auth, async (req, res) => {
  try {
    await req.user.remove();
    res.send(req.user);
  } catch (e) {
    res.status(500).send();
  }
});

const upload = multer({
  limits: { // setting file size limit
    fileSize: 1000000 // a million bites
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error('Please upload an image'))
    }
    
    cb(undefined, true)
  }
})

router.post('/users/me/avatar',auth, upload.single('avatar'), async (req, res) => {
  const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer()
    req.user.avatar = buffer
    await req.user.save()
    res.send()
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message})
})

router.delete('/users/me/avatar', auth, async(req, res) => {
  req.user.avatar = undefined
  await req.user.save()
  res.send()
})

router.get('/users/:id/avatar', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    
    if(!user || !user.avatar) {
      throw new Error()
    }
    
    res.set('Content-Type', 'image/png')
    res.send(user.avatar)
  }catch (e) {
    res.status(404).send()
  }
})



module.exports = router;
