const express = require("express");
const mongoose = require("mongoose");
const app = express();
const config = require("./config/config")
const rowRouter = require("./router/rowRouter");
const path = require("path");
const sassMiddleware = require("node-sass-middleware");
//middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}))

app.use(sassMiddleware({
    src: path.join(__dirname, "scss"),
    dest: path.join(__dirname, "public")
}));
app.use(express.static(path.join(__dirname, "public")));

//router 
app.use(rowRouter)

const port = process.env.PORT || 8004;
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

module.exports = {app}