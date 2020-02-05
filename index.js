const express = require("express");
const mongoose = require("mongoose");
const app = express();
const config = require("./config/config")
const rowRouter = require("./router/rowRouter");
const path = require("path");
//middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "public")));
//router 
app.use(rowRouter)

const port = process.env.PORT || 8003;
const options ={
    useUnifiedTopology: true, 
    useNewUrlParser: true
}
// app.listen(port);
mongoose.connect(config.databaseURL,options ).then(()=> {
    console.log("Successful")
    //app is listening to port 
    app.listen(port);
})