var mongoose = require('mongoose');
var rewardSchema = mongoose.Schema(
    {
        "rewardId":String,
        "userId":String,
        "price":String,
        "type":String,
    }
);
mongoose.model('rewards',rewardSchema);
