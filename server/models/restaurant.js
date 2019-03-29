var mongoose = require('mongoose');

var restaurantSchema = mongoose.Schema(
    {
        "username":{ type: String, lowercase: true, trim: true },
        "password":String,
        "email":String,
        "name":String,
        "address":Map,
        "description":String,
        "foodReviews":[{
                "username":String,
                "review":String,
                "rating":Number,
        }],
        "sustainabilityReviews":[{
                "username":String,
                "review":String,
                "rating":Number,
        }],
        "averageFoodRating":Number,
        "averageSustainabilityRating":Number,
        "typeOfRewards": [String],
        "photos":[String],
    }
);

mongoose.model('restaurants',restaurantSchema);
