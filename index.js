// importing dependencies
const Express = require("express");
const Joi = require("joi");
const Mongoose = require("mongoose");
require("dotenv/config");
const app = Express();

// defining port
const port = 3000;

// importing and using routes
const getRoutes = require("./routes/gets");
app.use("/",getRoutes);

const postRoutes = require("./routes/posts");
app.use("/post", postRoutes);

// connecting to database
Mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },()=>
{
    console.log("connected to DB!")
})

// listening to server
app.listen(port,()=>{
    console.log("Listening on port: ",port);
});