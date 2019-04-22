// Creating the database
const mongoose = require('mongoose');

// Mongo Atlas account
mongoose.set('useCreateIndex', true); // Silence deprecation warning.
mongoose.connect('mongodb+srv://alokanc:blah@cluster0-hjvc5.mongodb.net/test?retryWrites=true',{ useNewUrlParser: true },function(err){
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
