var mongoose = require('mongoose');
var userSchema = mongoose.Schema(
    {
        "username":String,
        "name":String,
        "rating":String,
        "photo":String
    }
);
mongoose.model('users',userSchema);
