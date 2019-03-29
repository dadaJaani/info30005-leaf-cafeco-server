var mongoose = require('mongoose');

var rewardSchema = mongoose.Schema(
    {
        "rewardId":String,
        "userId":String,
        "price":String,
        "date":String,
        "type":String,
    }
);

mongoose.model('rewards',rewardSchema);
