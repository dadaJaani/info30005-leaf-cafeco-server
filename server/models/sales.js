var mongoose = require('mongoose');

var saleSchema = mongoose.Schema(
    {
        "id":{type: String, lowercase: true, trim: true, unique: true },
        "restaurantId":String,
        "date":Date,
        "price":Number,
    }
);

mongoose.model('sales',saleSchema);
