// Creating the database
const mongoose = require('mongoose');

// mLab account
// mongoose.connect('mongodb://wrehmani:acdc1234@ds227146.mlab.com:27146/info30005-cafeco',function(err){

// Mongo Atlas account
mongoose.connect('mongodb+srv://wrehmani:acdc1234@cafeco-fww6o.mongodb.net/test?retryWrites=true',{ useNewUrlParser: true },function(err){
    if(!err){
        console.log('Connected to database.');
    }else{
        console.log('Failed to connect to database.');
    }
});

// Require all these files for the Schemas
require('./user.js');
require('./restaurant.js');
require('./sales.js');
require('./rewards.js');
