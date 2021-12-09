var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var app = express();
var mongoose = require("mongoose");
var port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

const mongoURI = 'mongodb://localhost:27017/Railway';

mongoose
    .connect(mongoURI, { useNewUrlParser: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

var citizen = require('./routes/cRoute');
var worker = require('./routes/wRoute');
var info=require('./routes/InfoRoute');
var acc=require('./routes/AccountRoute');
var email=require('./routes/EmailRoute');

app.use('/citizen', citizen);
app.use('/worker', worker);
app.use('/info',info);
app.use('/acc',acc);
app.use('/email',email);



app.listen(port, () => {
    console.log("Server is running on port: " + port)
});