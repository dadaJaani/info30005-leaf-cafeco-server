var mongoose = require('mongoose');
var Restaurants = mongoose.model('restaurants');

var createRestaurant = function(req,res){
    var newRestaurant = Restaurants(assembleRestaurant(req));

    // console.log(newRestaurant);

    newRestaurant.save(function(err,savedRestaurant){
        if(!err){
            res.send(savedRestaurant);
        }else{
            console.log(err)
            res.sendStatus(400);
        }
    });
};

var assembleRestaurant = function (req) {
    var restaurant = {
        "id":req.body.id,
        "password":req.body.password,
        "email":req.body.email,
        "name":req.body.name,
        "address":req.body.address,
        "description":req.body.description,
        "foodReviews":req.body.foodReviews,
        "sustainabilityReviews":req.body.sustainabilityReviews,
        "averageFoodRating":req.body.averageFoodRating,
        "averageSustainabilityRating":req.body.averageSustainabilityRating,
        "typeOfRewards": req.body.typeOfRewards,
        "photos":req.body.photos,
    };

    return restaurant;
};

var editRestaurant = function(req,res){
    var restaurantId = req.params.id;
    var restaurantUpdate = assembleRestaurant(req);

    // console.log(restaurantId);

    Restaurants.updateOne({id:restaurantId}, restaurantUpdate, function(err,updatedRestaurant){
        if(!err){
            res.send(updatedRestaurant);
        }else{
            console.log(err);
            res.sendStatus(400);
        }
    });
};

var findAllRestaurants = function(req,res){
    Restaurants.find(function(err,allRestaurants){
        if(!err){
            res.send(allRestaurants);
        }else{
            res.sendStatus(404);
        }
    });
};

var searchRestaurant = function(req, res){
    var restaurantId = req.params.id;
    Restaurants.find({id:restaurantId},function(err,searchedRestourant){
        if(!err){
            res.send(searchedRestourant);
        }else{
            res.sendStatus(404);
        }
    });
};

var deleteRestaurant = function(req, res){
    var restaurantId = req.params.id;
    Restaurants.deleteOne({id:restaurantId},function(err){
        if(!err){
            res.send(restaurantId);
        }else{
            res.sendStatus(404);
        }
    });
};

module.exports.createRestaurant = createRestaurant;
module.exports.editRestaurant = editRestaurant ;
module.exports.findAllRestaurants = findAllRestaurants;
module.exports.searchRestaurant = searchRestaurant;
module.exports.deleteRestaurant = deleteRestaurant;