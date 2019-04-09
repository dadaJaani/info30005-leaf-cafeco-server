var mongoose = require('mongoose');
var Restaurant = mongoose.model('restaurants');

var createRestaurant = function(req,res){
    var restaurant = new Restaurant({
        "username":req.body.username,
        "password":req.body.password,
        "email":req.body.email,
        "name":req.body.name,
        "address":req.body.Map,
        "description":req.body.description,
        "foodReviews":[{
            "username":req.body.foodReviews.username,
            "review":req.body.foodReviews.review,
            "rating":req.body.foodReviews.rating,
        }],
        "sustainabilityReviews":[{
            "username":req.body.sustainabilityReviews.username,
            "review":req.body.sustainabilityReviews.review,
            "rating":req.body.sustainabilityReviews.rating,
        }],
        "averageFoodRating":req.body.averageFoodRating,
        "averageSustainabilityRating":req.body.averageSustainabilityRating,
        "typeOfRewards": req.body.typeOfRewards,
        "photos":req.body.photos,
    });

    restaurant.save(function(err,newCafe){
        if(!err){
            res.send(restaurant);
        }else{
            res.sendStatus(400);
        }
    });
};

var findAllRestaurants = function(req,res){
    Restaurant.find(function(err,restaurants){
        if(!err){
            res.send(restaurants);
        }else{
            res.sendStatus(404);
        }
    });
};













module.exports.createRestaurant = createRestaurant;
module.exports.findAllRestaurants = findAllRestaurants;