var mongoose = require('mongoose');

// Making Schema for User
var userSchema = mongoose.Schema(
    {
        "id":{ type: String, lowercase: true, trim: true, unique: true },
        "password":{ type: String, lowercase: true, trim: true },
        "email":{ type: String, lowercase: true, trim: true, unique: true },
        "fname":{ type: String, trim: true },
        "lname":{ type: String, trim: true },
        "points":Number,
        "photo":{ type: String, trim: true },
    }
);

mongoose.model('users',userSchema);
