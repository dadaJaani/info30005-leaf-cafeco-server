// Creating the database
const mongoose = require('mongoose');


mongoose.connect('mongodb://wrehmani:acdc1234@ds227146.mlab.com:27146/info30005-cafeco',function(err){
    if(!err){
        console.log('Connected to database.');
    }else{
        console.log('Failed to connect to database.');
    }
});

require('./user.js');
require('./restaurant.js');
require('./sales.js');
require('./rewards.js');
