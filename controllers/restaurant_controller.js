var mongoose = require('mongoose');

// Import restaurants schema.
var Restaurants = mongoose.model('restaurants');

// Restaurant controller.
// Defines functions which deal with restaurants.

var assembleRestaurant = function (req) {
    var restaurant = {
        "id":req.body.id,
        "password":req.body.password,
        "email":req.body.email,
        "name":req.body.name,
        "address":req.body.address,
        "description":req.body.description,
        "about":req.body.about,
        "sustainabilityPractices":req.body.sustainabilityPractices,
        "foodReviews":[],
        "location": req.body.location,
        "sustainabilityReviews":[],
        "averageFoodRating": 0,
        "website": req.body.website,
        "phone": req.body.phone,
        "averageSustainabilityRating": 0,
        "typeOfRewards": req.body.typeOfRewards,
        "photo":req.body.photo,
    };

    return restaurant;
};

var createRestaurant = function(req,res){
    var newRestaurant = Restaurants(assembleRestaurant(req));

    newRestaurant.save(function(err,savedRestaurant){
        if(!err){
            res.send(savedRestaurant);
        }else{
            // console.log(err);
            res.send(err);
        }
    });
};

var createReview = function (req, res) {
    var restaurantID = req.params.id

    var newReview = {
        "username": req.body.username,
        "review": req.body.review,
        "rating": req.body.rating,
        "date": req.body.date,
    }

    console.log('restaurantID', restaurantID)


    Restaurants.findOne({ id: restaurantID },function(err,searchedRestaurant) {
        if(!err){
            var updatedSustainabilityReviews = searchedRestaurant.sustainabilityReviews;
            updatedSustainabilityReviews.push(newReview);

            var totalSustainabilityRating = 0;
            updatedSustainabilityReviews.forEach( review => totalSustainabilityRating += parseInt(review.rating))

            var newSustainabilityRating = totalSustainabilityRating/updatedSustainabilityReviews.length


            Restaurants.findOneAndUpdate({id: restaurantID}, { sustainabilityReviews: updatedSustainabilityReviews, averageSustainabilityRating: newSustainabilityRating}, function(err, updatedRestaurant){
                if(!err){
                    res.send(updatedRestaurant);
                }else{
                    // console.log(err);
                    res.sendStatus(400);
                }
            });

            // res.send(newReview);
        }else{
            // console.log(err);
            res.sendStatus(400);
        }
    });



};

var editRestaurant = function(req,res){
    var restaurantId = req.params.id;
    var restaurantUpdate = req.body.restaurantUpdate;

    Restaurants.findOneAndUpdate({id:restaurantId}, restaurantUpdate, function(err,updatedRestaurant){
        if(!err){
            res.send(updatedRestaurant);
        }else{
            // console.log(err);
            res.send(false);
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
    Restaurants.find({id:restaurantId},function(err,searchedRestaurant){
        if(!err){
            res.send(searchedRestaurant);
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

var validateRestaurantID = function (req, res){
    var restaurantId = req.params.id;

    Restaurants.findOne({ id: restaurantId }, function(err, theUser){
        if (theUser)
            res.send(true)
        else
            res.send(false)
    });
};

var validateRestaurantEmail = function (req, res){
    var email = req.params.id;

    Restaurants.findOne({ email: email }, function(err, theUser){
        if (theUser)
            res.send(true)
        else
            res.send(false)
    });
};

var loginRestaurant = function (req, res){

    var loginAttempt = {
        "id": req.body.id,
        "password": req.body.password,
    };

    Restaurants.findOne({ id: loginAttempt.id, password: loginAttempt.password }, function(err, theRestaurant){
        if (theRestaurant)
            res.send(theRestaurant)
        else
            res.send(false)
    });
};

module.exports.createRestaurant        = createRestaurant;
module.exports.editRestaurant          = editRestaurant ;
module.exports.findAllRestaurants      = findAllRestaurants;
module.exports.searchRestaurant        = searchRestaurant;
module.exports.createReview            = createReview;
module.exports.deleteRestaurant        = deleteRestaurant;
module.exports.validateRestaurantID    = validateRestaurantID;
module.exports.validateRestaurantEmail = validateRestaurantEmail;
module.exports.loginRestaurant         = loginRestaurant;
