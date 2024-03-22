const mongoose = require('mongoose');

//define mongodb connection URL
const mongoURL = 'mongodb://localhost:27017/hotels';

//set up mongodb connection
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//Get the deafualt connection
// Mangoose maintaines a deafualt connection object representing the mongodb connection.
const db = mongoose.connection;


//define event listeners for database connections
db.on('connected',() => {
    console.log("connected to mongodb server");
});


db.on('error',(err) => {
    console.log("MongoDB connection error:",err);    
});


db.on('disconnected',() => {
    console.log("MongoDB Disconnected");
});


//Export the database connection
module.exports = db;
