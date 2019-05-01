var mongoose = require('mongoose');

// Making Schema for Reward
var rewardSchema = mongoose.Schema(
    {
        "id":{type: String, lowercase: true, trim: true, unique: true },
        "username":{ type: String, trim: true },
        "restaurantID":{ type: String, trim: true },
        "points":Number,
        "date":Date,
        "type":String,
    }
);

mongoose.model('rewards',rewardSchema);
