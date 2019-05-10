var mongoose = require('mongoose');

// Import sales schema.
var Sales = mongoose.model('sales');

// Sale controller.
// Defines functions which deal with sales by restaurants.

var assembleSale = function (req) {
    var sale = {
        "id":req.body.id,
        "restaurantId":req.body.restaurantId,
        "date":req.body.date,
        "price":req.body.price,
    };

    return sale;
};

var createSale = function(req,res){
    var newSale = Sales(assembleSale(req));

    // console.log(newSale);

    newSale.save(function(err,savedSale){
        if(!err){
            res.send(savedSale);
        }else{
            // console.log(err);
            res.sendStatus(400);
        }
    });
};

var editSale = function(req,res){
    var saleId = req.params.id;
    var saleUpdate = assembleSale(req);

    // console.log(SaleUpdate);

    Sales.updateOne({id:saleId}, saleUpdate, function(err,updatedSale){
        if(!err){
            res.send(updatedSale);
        }else{
            // console.log(err);
            res.sendStatus(400);
        }
    });
};

var validateSaleID = function (req,res) {
    var id = req.params.id;

    Sales.findOne({ id: id }, function(err, theSale){
        if (theSale)
            res.send(true);
        else
            res.send(false);
    });
}

var findAllSales = function(req,res){
    Sales.find(function(err,allSales){
        if(!err){
            res.send(allSales);
        }else{
            res.sendStatus(404);
        }
    });
};

var getSale = function(req, res){
    var saleId = req.params.id;

    Sales.findOne({ id: saleId },function(err,searchedSale){
        if(searchedSale){
            res.send(searchedSale);
        } else {
            res.send(false);
        }
    });
};

var deleteSale = function(req, res){
    var saleId = req.params.id;
    Sales.deleteOne({id: saleId},function(err){
        if(!err){
            res.send(saleId);
        }else{
            res.send(false);
        }
    });
};

module.exports.createSale = createSale;
module.exports.editSale = editSale;
module.exports.validateSaleID = validateSaleID;
module.exports.findAllSales = findAllSales;
module.exports.getSale = getSale;
module.exports.deleteSale = deleteSale;
