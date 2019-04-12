var mongoose = require('mongoose');

// Making Schema for Sales
var saleSchema = mongoose.Schema(
    {
        "id":{type: String, lowercase: true, trim: true, unique: true },
        "restaurantId":{ type: String, trim: true },
        "date":Date,
        "price":Number,
    }
);

mongoose.model('sales',saleSchema);
