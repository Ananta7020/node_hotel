const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());  //req.body


app.get('/', (req, res) => {
  res.send('Welcome to our hotel !');
})

//Import Router files
const menuRoutes = require('./routes/menuRoutes');
const personRoutes = require('./routes/personRoutes');
 
//use the router routes
app.use('/person',personRoutes);
app.use('/menu',menuRoutes);

app.listen(3000, ()=>{
    console.log("listening on 3000");
})  