// importing modules

var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var cors = require("cors");
var path = require("path");


var app = express();

const route = require("./routes/route");

// connect to mongodb
//mongoose.connect("mongodb://localhost:27017/hockey");
mongoose.connect("mongodb://santosh:October2017@ds013946.mlab.com:13946/testdbroute146", ["players"]);

//on successful db connection
mongoose.connection.on("connected", ()=>{
    console.log("Connected to Mongodb at port: Matlab");
});

mongoose.connection.on("error", (err)=>{
    if(err) {
        console.log("database connection error---" + err);
    }
});

//port no
const port = 3000;

//adding middleware - cors
app.use(cors());

// body-parser
app.use(bodyparser.json());

// static files
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", route);


//testing Server
app.get("/", (req, res)=>{
    res.send("Hello first app using node");
});



app.listen(port, ()=>{
    console.log("Server started at port:" + port);
});