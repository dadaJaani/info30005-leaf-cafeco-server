var mongoose = require('mongoose');

// Import restaurants schema
var Restaurants = mongoose.model('restaurants');

// HELPER FUNCTION TO BE USED IN FUNCTIONS
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

// FUNCTION TO CREATE RESTAURANT
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

// FUNCTION TO EDIT RESTAURANT
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

// FUNCTION TO GET ALL RESTAURANTS
var findAllRestaurants = function(req,res){
    Restaurants.find(function(err,allRestaurants){
        if(!err){
            res.send(allRestaurants);
        }else{
            res.sendStatus(404);
        }
    });
};

// FUNCTION TO SEARCH A RESTAURANT
var searchRestaurant = function(req, res){
    var restaurantId = req.params.id;
    Restaurants.find({id:restaurantId},function(err,searchedRestaurant){
        if(!err){
            res.send(searchedRestaurant);
        }else{
            res.sendStatus(404);
        }
    });
};

// FUNCTION TO DELETE A RESTAURANT
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

// FUNCTION TO GET CHECK IF RESTAURANT ID EXISTS
var validateRestaurantID = function (req, res){
    var restaurantID = req.params.id;

    Restaurants.findOne({ id: restaurantID }, function(err, theUser){
        if (theUser)
            res.send(true)
        else
            res.send(false)
    });
};

// FUNCTION TO LOGIN WHEN RESTAURANT SIGNS IN
var loginRestaurant = function (req, res){

    var loginAttempt = {
        "id":       req.body.username,
        "password": req.body.password,
    };

    Restaurants.findOne({ id: loginAttempt.id, password: loginAttempt.password }, function(err, theRestaurant){
        if (theUser)
            res.send(theRestaurant)
        else
            res.send(false)
    });
};

module.exports.createRestaurant = createRestaurant;
module.exports.editRestaurant = editRestaurant ;
module.exports.findAllRestaurants = findAllRestaurants;
module.exports.searchRestaurant = searchRestaurant;
module.exports.deleteRestaurant = deleteRestaurant;
module.exports.validateRestaurantID = validateRestaurantID;
module.exports.loginRestaurant = loginRestaurant;
