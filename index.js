const express = require('express');
const mongoose = require('mongoose');
const path = require("path");
const HomeRouter = require("./Routers/HomeRouter");
const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true })); 
app.use('/',express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost:27017/Blogin" )
.then(()=> console.log("connected successfully"))
.catch((err)=> console.log(err));

app.use('/',HomeRouter);

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});