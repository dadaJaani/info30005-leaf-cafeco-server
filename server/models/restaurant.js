var mongoose = require('mongoose');
var restaurantSchema = mongoose.Schema(
    {
        "name":String,
        "address":String,
        "distance":String,
        "rating":String,
        "photo":String
    }
);
mongoose.model('restaurants',restaurantSchema);
