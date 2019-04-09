var mongoose = require('mongoose');

var userSchema = mongoose.Schema(
    {
        "id":{ type: String, lowercase: true, trim: true, unique: true },
        "password":String,
        "email":{ type: String, lowercase: true, trim: true, unique: true },
        "fname":String,
        "lname":String,
        "points":Number,
        "photo":String,
    }
);

mongoose.model('users',userSchema);
