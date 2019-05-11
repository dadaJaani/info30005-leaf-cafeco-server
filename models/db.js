// Creating the database
const mongoose = require('mongoose');

// Mongo Atlas account


mongoose.set('useCreateIndex', true); // Silence deprecation warning.

// TEST DATABASE
mongoose.connect('mongodb+srv://leaf:acdc1234@cafeco-fww6o.mongodb.net/test?retryWrites=true',{ useNewUrlParser: true },function(err){

// mongoose.connect('mongodb+srv://leaf:acdc1234@cafeco-fww6o.mongodb.net/cafeco?retryWrites=true',{ useNewUrlParser: true },function(err){
    if(!err){
        console.log('Connected to database.');
    }else{
        console.log(err);
    }
});

// Require all these files for the Schemas
require('./user.js');
require('./restaurant.js');
require('./sales.js');
require('./rewards.js');
