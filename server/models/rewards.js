var mongoose = require('mongoose');

// Making Schema for Reward
var rewardSchema = mongoose.Schema(
    {
        "id":{type: String, lowercase: true, trim: true, unique: true },
        "userId":{ type: String, trim: true },
        "price":Number,
        "date":Date,
        "type":String,
    }
);

mongoose.model('rewards',rewardSchema);
