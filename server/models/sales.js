var mongoose = require('mongoose');

var saleSchema = mongoose.Schema(
    {
        "saleId":String,
        "restaurantId":String,
        "date":Date,
        "price":Number,
    }
);

mongoose.model('sales',saleSchema);
