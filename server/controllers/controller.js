var mongoose = require('mongoose');

var restaurant = require('./restaurant_controller.js');
var reward = require('./reward_controller.js');
var sale = require('./sale_controller.js');

var User       = mongoose.model('users');


// =============================================
// USER FUNCTIONS
// =============================================

// FUNCTION TO CREATE USER
var createUser = function(req, res){
    var newUser = new User({
        "id":      req.body.username,
        "password": req.body.password,
        "email":    req.body.email,
        "fname":    req.body.fname,
        "lname":    req.body.lname,
        "points":   0,
        "photo":    '',
    });

    newUser.save(function (err, createdCafe)  {
        if (!err){
            res.send(createdCafe);
        }
        else {
            res.send(err);
        }
    });
};


// FUNCTION TO EDIT USER
var editUser = function(req, res){
    var userID = req.params.id;

    var newUser = {
        "id":       req.body.username,
        "password": req.body.password,
        "email":    req.body.email,
        "fname":    req.body.fname,
        "lname":    req.body.lname,
        "points":   0,
        "photo":    '',
    };

    User.updateOne({ id: userID }, newUser, function(err, updatedUser) {
        if (!err){
            res.send(updatedUser);
        }
        else {
            res.send(err);
        }
    });
};

// FUNCTION TO DELETE USER
var deleteUser = function(req, res){
    var userID = req.params.id;

    User.deleteOne({ id: userID } ,function(err){
        if (err)
            res.send(err)
    });

};

// FUNCTION TO GET CHECK IF USER ID EXISTS
var validateUserID = function (req, res){
    var userID = req.params.id;

    User.findOne({ id: userID }, function(err, theUser){
        if (theUser)
            res.send(theUser)
        else
            res.send({ username: ""})
    });
};

// FUNCTION TO CHECK PASSWORD WHEN USER SIGNS IN

// FUNCTION TO GET USER




// =============================================
// SALES FUNCTIONS
// =============================================



// =============================================
// REWARDS FUNCTIONS
// =============================================

// =============================================
// ALEKS WILL DO
// =============================================

// FUNCTION TO CREATE RESTAURANT

// FUNCTION TO EDIT RESTAURANT

// FUNCTION TO DELETE RESTAURANT

// FUNCTION TO GET CHECK IF RESTAURANT ID EXISTS

// FUNCTION TO CHECK PASSWORD WHEN RESTAURANT SIGNS IN

// FUNCTION TO GET RESTAURANT DATA

module.exports.createUser = createUser;
module.exports.deleteUser = deleteUser;
module.exports.editUser = editUser;

module.exports.createRestaurant = restaurant.createRestaurant;
module.exports.editRestaurant = restaurant.editRestaurant;
module.exports.findAllRestaurants = restaurant.findAllRestaurants;
module.exports.searchRestaurant = restaurant.searchRestaurant;
module.exports.deleteRestaurant = restaurant.deleteRestaurant;

module.exports.createReward = reward.createReward;
module.exports.editReward = reward.editReward;
module.exports.findAllRewards = reward.findAllRewards;
module.exports.searchReward = reward.searchReward;
module.exports.deleteReward = reward.deleteReward;

module.exports.createSale = sale.createSale;
module.exports.editSale = sale.editSale;
module.exports.findAllSales = sale.findAllSales;
module.exports.searchSale = sale.searchSale;
module.exports.deleteSale = sale.deleteSale;
