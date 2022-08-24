// Require all module
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const path = require('path');
const pageRoute = require('./routes/pageRoutes');


// Init express 
let app = express();

// Joson and from data get 
app.use(express.json());
app.use(express.urlencoded( {extended : false} ));

// envirentment variable
dotenv.config();
const PORT = process.env.PORT;

// Static publick Folder 
app.use(express.static('public'));

//======= Routing =======//
app.use( pageRoute );

// Create server 
app.listen(PORT , () => {
    console.log(`Your server is running on port ${PORT}`.bgYellow.black);
})