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
        "rating":Number,
        "date":Date,
    }
);

var mapLoc = mongoose.Schema(
    {
        "lng":Number,
        "lat":Number,
    }
);

// Making Schema for Restaurant
var restaurantSchema = mongoose.Schema(
    {
        "id":{ type: String, lowercase: true, trim: true, unique: true },
        "password":{ type: String, lowercase: true, trim: true },
        "email":{ type: String, lowercase: true, trim: true, unique: true },
        "name":{ type: String, trim: true },
        "address":{ type: String, trim: true },
        "description":String,
        "about":String,
        "sustainabilityPractices":[String],
        "foodReviews":[foodReviewSchema],
        "sustainabilityReviews":[
            {
                "username":{ type: String, trim: true },
                "review":String,
                "rating":Number,
                "date":Date,
            }
        ],
        "averageFoodRating":Number,
        "location":mapLoc,
        "website":{ type: String, lowercase: true, trim: true },
        "phone":{ type: String, lowercase: true, trim: true },
        "averageSustainabilityRating":Number,
        "typeOfRewards": [String],
        "photo":{ type: String, trim: true },
    }
);

mongoose.model('restaurants',restaurantSchema);
