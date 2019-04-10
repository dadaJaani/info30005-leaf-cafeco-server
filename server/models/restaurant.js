var mongoose = require('mongoose');

var foodReviewSchema = mongoose.Schema(
    {
        "username":String,
        "review":String,
        "rating":Number
    }

);

var sustainabilityReviewSchema = mongoose.Schema(
    {
        "username":String,
        "review":String,
        "rating":Number
    }

);

var restaurantSchema = mongoose.Schema(
    {
        "id":{ type: String, lowercase: true, trim: true, unique: true },
        "password":String,
        "email":{ type: String, lowercase: true, trim: true, unique: true },
        "name":String,
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
