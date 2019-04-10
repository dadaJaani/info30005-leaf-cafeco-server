var mongoose = require('mongoose');
var Sales = mongoose.model('sales');

var createSale = function(req,res){
    var newSale = Sales(assembleSale(req));

    // console.log(newSale);

    newSale.save(function(err,savedSale){
        if(!err){
            res.send(savedSale);
        }else{
            console.log(err)
            res.sendStatus(400);
        }
    });
};

var assembleSale = function (req) {
    var sale = {
        "id":req.body.id,
        "restaurantId":req.body.restaurantId,
        "date":req.body.date,
        "price":req.body.price,
    };

    return sale;
};

var editSale = function(req,res){
    var saleId = req.params.id;
    var saleUpdate = assembleSale(req);

    // console.log(SaleUpdate);

    Sales.updateOne({id:saleId}, saleUpdate, function(err,updatedSale){
        if(!err){
            res.send(updatedSale);
        }else{
            console.log(err);
            res.sendStatus(400);
        }
    });
};

var findAllSales = function(req,res){
    Sales.find(function(err,allSales){
        if(!err){
            res.send(allSales);
        }else{
            res.sendStatus(404);
        }
    });
};

var searchSale = function(req, res){
    var saleId = req.params.id;
    Sales.find({id:saleId},function(err,searchedSale){
        if(!err){
            res.send(searchedSale);
        }else{
            res.sendStatus(404);
        }
    });
};

var deleteSale = function(req, res){
    var saleId = req.params.id;
    Sales.deleteOne({id:saleId},function(err){
        if(!err){
            res.send(saleId);
        }else{
            res.sendStatus(404);
        }
    });
};

module.exports.createSale = createSale;
module.exports.editSale = editSale;
module.exports.findAllSales = findAllSales;
module.exports.searchSale = searchSale;
module.exports.deleteSale = deleteSale;
