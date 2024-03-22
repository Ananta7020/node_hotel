const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());  //req.body
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send('Welcome to our hotel !');
})

//Import Router files
const menuRoutes = require('./routes/menuRoutes');
const personRoutes = require('./routes/personRoutes');
 
//use the router routes
app.use('/person',personRoutes);
app.use('/menu',menuRoutes);


app.listen(PORT, ()=>{
    console.log("listening on 3000");
})  