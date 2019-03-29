var mongoose = require('mongoose');

var userSchema = mongoose.Schema(
    {
        "username":{ type: String, lowercase: true, trim: true },
        "password":String,
        "email":String,
        "fname":String,
        "lname":String,
        "points":Number,
        "photo":String,
    }
);

mongoose.model('users',userSchema);
