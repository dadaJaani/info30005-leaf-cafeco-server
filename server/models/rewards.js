var mongoose = require('mongoose');

var rewardSchema = mongoose.Schema(
    {
        "id":{type: String, lowercase: true, trim: true, unique: true },
        "userId":String,
        "price":Number,
        "date":String,
        "type":String,
    }
);

mongoose.model('rewards',rewardSchema);
