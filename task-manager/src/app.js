const express = require("express");
require("./db/mongoose"); // this just runs the mongoose file when this file is run
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();

app.use(express.json()); //automatically parse incoming json to an object so we can access it in our request handler
app.use(userRouter);
app.use(taskRouter);

module.exports = app;
