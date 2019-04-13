var mongoose = require('mongoose');

// Making Sub-schema
var foodReviewSchema = mongoose.Schema(
    {
            "username":{ type: String, trim: true },
            "review":String,
            "rating":Number
    }
);

// Making Sub-schema
var sustainabilityReviewSchema = mongoose.Schema(
    {
        "username":{ type: String, trim: true },
        "review":String,
        "rating":Number
    }
);

// Making Schema for Restaurant
var restaurantSchema = mongoose.Schema(
    {
        "id":{ type: String, lowercase: true, trim: true, unique: true },
        "password":{ type: String, lowercase: true, trim: true },
        "email":{ type: String, lowercase: true, trim: true, unique: true },
        "name":{ type: String, trim: true },
        "address":Map,
        "description":String,
        "foodReviews":[foodReviewSchema],
        "sustainabilityReviews":[sustainabilityReviewSchema],
        "averageFoodRating":Number,
        "averageSustainabilityRating":Number,
        "typeOfRewards": [String],
        "photos":[String],
    }
);

mongoose.model('restaurants',restaurantSchema);
