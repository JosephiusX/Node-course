const mongoose = require("mongoose");
const url = process.env.MONGODB_URL;

mongoose.connect(url, {
  // connecting mongoose to the database
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
