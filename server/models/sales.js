var mongoose = require('mongoose');
var saleSchema = mongoose.Schema(
    {
        "saleId":String,
        "restaurantId":String,
        "price":String,
    }
);
mongoose.model('sales',saleSchema);
