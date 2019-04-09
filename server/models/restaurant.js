var mongoose = require('mongoose');

var restaurantSchema = mongoose.Schema(
    {
        "id":{ type: String, lowercase: true, trim: true, unique: true },
        "password":String,
        "email":{ type: String, lowercase: true, trim: true, unique: true },
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
